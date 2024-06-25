import { Browser, PermissionDetail, PermissionDetails, Platform, permission_details } from './constants';
import createModal from './modal';

export interface PermissionResult {
  success: boolean;
  stream?: MediaStream;
  message?: string;
  steps?: string;
  screenshot_url?: string;
  deep_link?: string;
  openDeepLink?: () => void;
  showSteps?: () => void;
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

  return { browser: Browser[browser], os: Platform[os] };
};

class CameraPermission {
  private data: PermissionDetails | undefined = undefined;

  constructor(data?: PermissionDetails) {
    if (data) {
      this.data = data;
    }
  }

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
    const notSupported = browser === 'unknown' || os === 'unknown';

    const { steps, screenshot_url, deep_link } = (this.data || permission_details)[browser][os] as PermissionDetail;

    return {
      success: false,
      message: notSupported ? 'Browser or OS not supported.' :'Camera permission denied.',
      steps,
      deep_link,
      screenshot_url,
      openDeepLink: () => window.open(deep_link, '_blank'),
      showSteps: async () => {
        if (os === 'ios' || os === 'android') {
          createModal({ steps, screenshot_url })
          return;
        }

        createModal({ steps: 'To enable video stream features please follow settings link: ' + deep_link, screenshot_url })
      },
    };
  }
}

export default CameraPermission;
