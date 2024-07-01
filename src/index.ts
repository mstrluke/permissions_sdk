import { ErrorMessagesProps, PermissionDetail, PermissionDetails, error_messages, permission_details } from './constants';
import createModal from './modal';

export interface PermissionResult {
  success: boolean;
  stream?: MediaStream;
  error?: { name: string, message: string };
  steps?: string;
  screenshot_urls?: string[];
  deep_link?: string;
  openDeepLink?: () => void;
  showSteps?: () => void;
}

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
    } catch (error: any) {
      return this.handlePermissionDenied(error);
    }
  }

  private getDetails = (error_name: string) => {
    const userAgent = navigator.userAgent.toLowerCase();
    const promptedBrowserName: string = prompt('What browser you are using ?') || userAgent;

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

    let details = (this.permissions_data || permission_details)[browser][os] as PermissionDetail;
    const message = (this.errors_data || error_messages)[error_name] || error_messages.Default;
    const isMobile: boolean = (os === 'android' || os === 'ios');

    if (error_name === 'System Error') {
      details = (this.permissions_data || permission_details).system[os];
    }

    return {
      message,
      ...details,
      ...(!isMobile ? { steps: 'To enable video stream features please follow settings link: ' + details.deep_link } : {}),
    };
  };

  private handlePermissionDenied(error: any): PermissionResult {
    const error_name = error?.name;
    const { steps, screenshot_urls, deep_link, message } = this.getDetails(error_name);

    return {
      steps,
      deep_link,
      screenshot_urls,
      success: false,
      error: { name: error_name, message },
      openDeepLink: () => {
        const res = window.open(deep_link, '_blank');

        if (!res) throw new Error('Not allowed to load local resource');
      },
      showSteps: async () => createModal({ steps, message, screenshot_urls }),
    };
  }
}

export default CameraPermission;
