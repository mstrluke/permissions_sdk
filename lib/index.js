var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { error_messages, permission_details } from './constants';
import createModal from './modal';
class CameraPermission {
    constructor(permissions_data, errors_data) {
        this.permissions_data = undefined;
        this.errors_data = undefined;
        this.getDetails = (error_name) => {
            const userAgent = navigator.userAgent.toLowerCase();
            const promptedBrowserName = prompt('What browser you are using ?') || userAgent;
            const browser = /vivaldi/.test(promptedBrowserName)
                ? 'vivaldi'
                : /edg/.test(promptedBrowserName)
                    ? 'edge'
                    : /opr\//.test(promptedBrowserName)
                        ? 'opera'
                        : /chrome|chromium|crios/.test(promptedBrowserName)
                            ? 'chrome'
                            : /firefox|fxios/.test(promptedBrowserName)
                                ? 'firefox'
                                : /safari/.test(promptedBrowserName) && !/chrome/.test(promptedBrowserName)
                                    ? 'safari'
                                    : /samsungbrowser/.test(promptedBrowserName)
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
            let details = (this.permissions_data || permission_details)[browser][os];
            const message = (this.errors_data || error_messages)[error_name] || error_messages.Default;
            const isMobile = (os === 'android' || os === 'ios');
            if (error_name === 'System Error') {
                details = (this.permissions_data || permission_details).system[os];
            }
            return Object.assign(Object.assign({ message }, details), (!isMobile ? { steps: 'To enable video stream features please follow settings link: ' + details.deep_link } : {}));
        };
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
                return this.handlePermissionDenied(error);
            }
        });
    }
    handlePermissionDenied(error) {
        const error_name = error === null || error === void 0 ? void 0 : error.name;
        const { steps, screenshot_urls, deep_link, message } = this.getDetails(error_name);
        return {
            steps,
            deep_link,
            screenshot_urls,
            success: false,
            error: { name: error_name, message },
            openDeepLink: () => {
                const res = window.open(deep_link, '_blank');
                if (!res)
                    throw new Error('Not allowed to load local resource');
            },
            showSteps: () => __awaiter(this, void 0, void 0, function* () { return createModal({ steps, message, screenshot_urls }); }),
        };
    }
}
export default CameraPermission;
