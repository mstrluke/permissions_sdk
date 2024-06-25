var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Browser, Platform, error_messages, permission_details } from './constants';
import createModal from './modal';
const detectBrowserAndOS = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const browser = /chrome|chromium|crios/.test(userAgent)
        ? 'chrome'
        : /firefox|fxios/.test(userAgent)
            ? 'firefox'
            : /safari/.test(userAgent) && !/chrome/.test(userAgent)
                ? 'safari'
                : /opr\//.test(userAgent)
                    ? 'opera'
                    : /edg/.test(userAgent)
                        ? 'edge'
                        : /samsungbrowser/.test(userAgent)
                            ? 'samsung'
                            : 'unknown';
    const os = /android/.test(userAgent)
        ? 'android'
        : /ipad|iphone|ipod/.test(userAgent)
            ? 'ios'
            : /macintosh|mac os x/.test(userAgent)
                ? 'macos'
                : /windows|win32/.test(userAgent)
                    ? 'windows'
                    : /linux/.test(userAgent)
                        ? 'linux'
                        : 'unknown';
    return { browser: Browser[browser], os: Platform[os] };
};
class CameraPermission {
    constructor(data) {
        this.data = undefined;
        if (data) {
            this.data = data;
        }
    }
    getCameraPermission() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const stream = yield navigator.mediaDevices.getUserMedia({ video: true });
                return { success: true, stream };
            }
            catch (error) {
                return this.handlePermissionDenied(error instanceof DOMException ? error.name : 'Default');
            }
        });
    }
    handlePermissionDenied(error_name) {
        const { browser, os } = detectBrowserAndOS();
        const { steps, screenshot_url, deep_link } = (this.data || permission_details)[browser][os];
        return {
            success: false,
            error: {
                name: error_name,
                message: error_messages[error_name]
            },
            steps,
            deep_link,
            screenshot_url,
            openDeepLink: () => window.open(deep_link, '_blank'),
            showSteps: () => __awaiter(this, void 0, void 0, function* () {
                if (os === 'ios' || os === 'android') {
                    createModal({
                        steps,
                        screenshot_url,
                        error_message: error_messages[error_name]
                    });
                }
                createModal({
                    steps: 'To enable video stream features please follow settings link: ' + deep_link,
                    screenshot_url,
                    error_message: error_messages[error_name],
                });
            }),
        };
    }
}
export default CameraPermission;
