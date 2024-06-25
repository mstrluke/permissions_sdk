import { Browser, ErrorMessagesProps, PermissionDetail, PermissionDetails, Platform, error_messages, permission_details } from './constants';
import createModal from './modal';

export interface PermissionResult {
  success: boolean;
  stream?: MediaStream;
  error?: { name: string, message: string };
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
  private permissions_data: PermissionDetails | undefined = undefined;
  private errors_data: ErrorMessagesProps | undefined = undefined;

  constructor(permissions_data?: PermissionDetails, errors_data?: ErrorMessagesProps) {
    this.permissions_data = permissions_data;
    this.errors_data = errors_data;
  }

  async getCameraPermission(): Promise<PermissionResult> {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      return { success: true, stream };
    } catch (error: unknown) {
      return this.handlePermissionDenied(error instanceof DOMException ? error.name : 'Default');
    }
  }

  private handlePermissionDenied(error_name: string): PermissionResult {
    const { browser, os } = detectBrowserAndOS();
    const { steps, screenshot_url, deep_link } = (this.permissions_data || permission_details)[browser][os] as PermissionDetail;
    const message = (this.errors_data || error_messages)[error_name];

    return {
      success: false,
      error: { name: error_name, message },
      steps,
      deep_link,
      screenshot_url,
      openDeepLink: () => {
        const res = window.open(deep_link, '_blank');
        if (!res) throw new Error('Not allowed to load local resource');
      },
      showSteps: async () => {
        if (os === 'ios' || os === 'android') {
          createModal({
            steps,
            screenshot_url,
            message,
          })
        }

        createModal({
          steps: 'To enable video stream features please follow settings link: ' + deep_link,
          screenshot_url,
          message,
        })
      },
    };
  }
}

export default CameraPermission;
