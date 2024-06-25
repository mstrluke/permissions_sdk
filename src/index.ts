import { permission_details } from './constants';
import createModal from './modal';

export interface PermissionResult {
  success: boolean;
  stream?: MediaStream;
  message?: string;
  steps?: string;
  screenshotUrl?: string;
  deep_link?: string;
  openSettings?: () => void;
  copyDeepLink?: () => void;
}

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

  return { browser, os };
};

class CameraPermission {
  async getCameraPermission(): Promise<PermissionResult> {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      return { success: true, stream };
    } catch (error) {
      return this.handlePermissionDenied();
    }
  }

  private handlePermissionDenied(): PermissionResult {
    const { browser, os } = detectBrowserAndOS();

    if (browser === 'unknown' || os === 'unknown') return {
      success: false,
      message: 'Browser or OS not supported.',
      steps: 'Please refer to your browser and operating system documentation to enable camera permissions.',
      screenshotUrl: 'https://example.com/screenshots/default.png',
      openSettings: () => { },
    };

    const { steps, screenshotUrl, deep_link } = permission_details[browser][os]


    return {
      success: false,
      message: 'Camera permission denied.',
      steps,
      deep_link,
      screenshotUrl,
      openSettings: () => window.open(deep_link, '_blank'),
      copyDeepLink: async () => {
        if (os === 'ios' || os === 'android') {
          createModal({ steps, screenshotUrl })
          return;
        }

        createModal({ steps: 'To enable video stream features please follow settings link: ' + deep_link, screenshotUrl })
      },
    };
  }
}

export default CameraPermission;
