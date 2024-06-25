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
    constructor(permissions_data, errors_data) {
        this.permissions_data = undefined;
        this.errors_data = undefined;
        this.permissions_data = permissions_data;
        this.errors_data = errors_data;
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
        const { steps, screenshot_url, deep_link } = (this.permissions_data || permission_details)[browser][os];
        const message = (this.errors_data || error_messages)[error_name];
        return {
            success: false,
            error: { name: error_name, message },
            steps,
            deep_link,
            screenshot_url,
            openDeepLink: () => {
                const res = window.open(deep_link, '_blank');
                if (!res)
                    throw new Error('Not allowed to load local resource');
            },
            showSteps: () => __awaiter(this, void 0, void 0, function* () {
                if (os === 'ios' || os === 'android') {
                    createModal({
                        steps,
                        screenshot_url,
                        message,
                    });
                }
                createModal({
                    steps: 'To enable video stream features please follow settings link: ' + deep_link,
                    screenshot_url,
                    message,
                });
            }),
        };
    }
}
export default CameraPermission;
