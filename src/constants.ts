export enum Browser {
  chrome = 'chrome',
  firefox = 'firefox',
  safari = 'safari',
  edge = 'edge',
  samsung = 'samsung',
  opera = 'opera',
  brave = 'brave',
  vivaldi = 'vivaldi',
  unknown = 'unknown',
  system = 'system',
}

export enum Platform {
  android = 'android',
  windows = 'windows',
  macos = 'macos',
  ios = 'ios',
  linux = 'linux',
  unknown = 'unknown',
}

export type PermissionDetail = {
  deep_link: string;
  steps: string;
  screenshot_urls: string[];
}

export type PermissionDetails = {
  [key: string]: { [key: string]: PermissionDetail };
};

export const permission_details: PermissionDetails = {
  [Browser.chrome]: {
    [Platform.windows]: {
      deep_link: 'chrome://settings/content/camera',
      steps: 'Go to Chrome Settings > Privacy and security > Site Settings > Camera and enable it.',
      screenshot_urls: ['https://i.ibb.co/y0zswLW/chrome-windows.png', 'https://i.ibb.co/MNNxW8G/chrome-windows-1.png'],
    },
    [Platform.macos]: {
      deep_link: 'chrome://settings/content/camera',
      steps: 'Go to Chrome Settings > Privacy and security > Site Settings > Camera and enable it.',
      screenshot_urls: ['https://i.ibb.co/y0zswLW/chrome-windows.png', 'https://i.ibb.co/MNNxW8G/chrome-windows-1.png', 'https://i.ibb.co/y0zswLW/chrome-windows.png', 'https://i.ibb.co/MNNxW8G/chrome-windows-1.png'],
    },
    [Platform.linux]: {
      deep_link: 'chrome://settings/content/camera',
      steps: 'Go to Chrome Settings > Privacy and security > Site Settings > Camera and enable it.',
      screenshot_urls: ['https://i.ibb.co/y0zswLW/chrome-windows.png', 'https://i.ibb.co/MNNxW8G/chrome-windows-1.png'],
    },
    [Platform.ios]: {
      deep_link: 'chrome://settings/content/camera',
      steps: 'Go to iOS Settings > Chrome > Camera and allow access.',
      screenshot_urls: ['https://i.ibb.co/bXVvhXB/settings.jpg', 'https://i.ibb.co/vsYJhh8/chrome.jpg'],
    },
    [Platform.android]: {
      deep_link: 'chrome://settings/content/camera',
      steps: 'Go to Settings > Apps & notifications > Chrome > Permissions > Camera and enable it.',
      screenshot_urls: ['https://i.ibb.co/nC8NVmZ/chrome.jpg', 'https://i.ibb.co/3hLqbn8/chrome-1.jpg', 'https://i.ibb.co/gy5XzNL/chrome-2.jpg'],
    },
  },
  [Browser.firefox]: {
    [Platform.windows]: {
      deep_link: 'about:preferences#privacy',
      steps: 'Go to Browser Settings > Privacy & Security > Permissions > Camera and enable it.',
      screenshot_urls: ['https://i.ibb.co/DC2m3Pw/firefox-windows-1.png', 'https://i.ibb.co/Q8Txhbq/firefox-windows.png'],
    },
    [Platform.macos]: {
      deep_link: 'about:preferences#privacy',
      steps: 'Go to Browser Settings > Privacy & Security > Permissions > Camera and enable it.',
      screenshot_urls: ['https://i.ibb.co/DC2m3Pw/firefox-windows-1.png', 'https://i.ibb.co/Q8Txhbq/firefox-windows.png'],
    },
    [Platform.linux]: {
      deep_link: 'about:preferences#privacy',
      steps: 'Go to Browser Settings > Privacy & Security > Permissions > Camera and enable it.',
      screenshot_urls: ['https://i.ibb.co/DC2m3Pw/firefox-windows-1.png', 'https://i.ibb.co/Q8Txhbq/firefox-windows.png'],
    },
    [Platform.ios]: {
      deep_link: 'about:preferences#privacy',
      steps: 'Go to iOS Settings > Browser Name > Camera and allow access.',
      screenshot_urls: ['https://i.ibb.co/bXVvhXB/settings.jpg', 'https://i.ibb.co/vYtssYc/firefox.jpg'],
    },
    [Platform.android]: {
      deep_link: 'about:preferences#privacy',
      steps: 'Go to Settings > Apps > Browser Name > Permissions > Camera and enable it.',
      screenshot_urls: ['https://i.ibb.co/MP0K7KZ/firefox-2.jpg', 'https://i.ibb.co/7kcbbTn/firefox-1.jpg', 'https://i.ibb.co/qBYp6jr/firefox.jpg'],
    },
  },
  [Browser.brave]: {
    [Platform.windows]: {
      deep_link: 'brave://settings',
      steps: 'Go to Browser Settings > Privacy & Security > Permissions > Camera and enable it.',
      screenshot_urls: ['https://i.ibb.co/XZh8p0m/linux-brave.png', 'https://i.ibb.co/Hz5YNfP/linux-brave-1.png'],
    },
    [Platform.macos]: {
      deep_link: 'x-apple.systempreferences:com.apple.preference.security?Privacy_Camera',
      steps: 'Go to Browser Preferences > Websites > Camera and enable it.',
      screenshot_urls: ['https://i.ibb.co/XZh8p0m/linux-brave.png', 'https://i.ibb.co/Hz5YNfP/linux-brave-1.png'],
    },
    [Platform.linux]: {
      deep_link: 'brave://settings',
      steps: 'Go to Browser Settings > Websites > Camera and enable it.',
      screenshot_urls: ['https://i.ibb.co/XZh8p0m/linux-brave.png', 'https://i.ibb.co/Hz5YNfP/linux-brave-1.png'],
    },
    [Platform.ios]: {
      deep_link: 'brave://settings',
      steps: 'Go to iOS Settings > Browser Name > Camera and allow access.',
      screenshot_urls: ['https://i.ibb.co/bXVvhXB/settings.jpg', 'https://i.ibb.co/Rhzt0by/brave.jpg'],
    },
    [Platform.android]: {
      deep_link: 'brave://settings',
      steps: 'Go to Android Settings > Browser Name > Camera and allow access.',
      screenshot_urls: [],
    },
  },
  [Browser.safari]: {
    [Platform.macos]: {
      deep_link: 'x-apple.systempreferences:com.apple.preference.security?Privacy_Camera',
      steps: 'Go to Safari Preferences > Websites > Camera and enable it.',
      screenshot_urls: ['https://i.ibb.co/2gvGvQ7/Screenshot-2024-07-01-at-12-24-34-AM.png'],
    },
    [Platform.ios]: {
      deep_link: 'app-settings://safari',
      steps: 'Go to iOS Settings > Safari > Camera and allow access.',
      screenshot_urls: ['https://i.ibb.co/bXVvhXB/settings.jpg', 'https://i.ibb.co/kqjGtVs/safari.jpg', 'https://i.ibb.co/6ZLdrb3/safari-1.jpg'],
    },
  },
  [Browser.edge]: {
    [Platform.windows]: {
      deep_link: 'edge://settings/content/camera',
      steps: 'Go to Browser Settings > Site permissions > Camera and enable it.',
      screenshot_urls: ['https://i.ibb.co/1byrWXt/edge-windows-1.png', 'https://i.ibb.co/0ybZNTV/linux-edge.png'],
    },
    [Platform.macos]: {
      deep_link: 'edge://settings/content/camera',
      steps: 'Go to Browser Settings > Site permissions > Camera and enable it.',
      screenshot_urls: ['https://i.ibb.co/1byrWXt/edge-windows-1.png', 'https://i.ibb.co/0ybZNTV/linux-edge.png'],
    },
    [Platform.linux]: {
      deep_link: 'edge://settings/content/camera',
      steps: 'Go to Browser Settings > Site permissions > Camera and enable it.',
      screenshot_urls: ['https://i.ibb.co/1byrWXt/edge-windows-1.png', 'https://i.ibb.co/0ybZNTV/linux-edge.png'],
    },
    [Platform.ios]: {
      deep_link: 'edge://settings/content/camera',
      steps: 'Go to iOS Settings > Browser Name > Camera and allow access.',
      screenshot_urls: ['https://i.ibb.co/bXVvhXB/settings.jpg', 'https://i.ibb.co/84M0FRX/edge.jpg'],
    },
    [Platform.android]: {
      deep_link: 'edge://settings/content/camera',
      steps: 'Go to Android Settings > Browser Name > Camera and allow access.',
      screenshot_urls: ['https://i.ibb.co/jh3xfQx/edge-3.jpg', 'https://i.ibb.co/wWWyGN8/edge-2.jpg', 'https://i.ibb.co/WpjLFvx/edge-1.jpg', 'https://i.ibb.co/w0jFgfc/edge.jpg'],
    },
  },
  [Browser.samsung]: {
    [Platform.android]: {
      deep_link: 'intent://settings/content/camera',
      steps: 'Go to Settings > Apps > Samsung Internet > Permissions > Camera and enable it.',
      screenshot_urls: ['https://i.ibb.co/QrvvDZv/samsung-2.jpg', 'https://i.ibb.co/CwVFKvJ/samsung-1.jpg', 'https://i.ibb.co/2MJq6Pz/samsung.jpg'],
    },
  },
  [Browser.vivaldi]: {
    [Platform.linux]: {
      deep_link: 'edge://settings/content/camera',
      steps: 'Go to Browser Settings > Site permissions > Camera and enable it.',
      screenshot_urls: ['https://i.ibb.co/zJTGcpW/linux-vivaldi.png'],
    },
    [Platform.windows]: {
      deep_link: 'edge://settings/content/camera',
      steps: 'Go to Browser Settings > Site permissions > Camera and enable it.',
      screenshot_urls: ['https://i.ibb.co/zJTGcpW/linux-vivaldi.png'],
    },
    [Platform.macos]: {
      deep_link: 'edge://settings/content/camera',
      steps: 'Go to Browser Settings > Site permissions > Camera and enable it.',
      screenshot_urls: ['https://i.ibb.co/zJTGcpW/linux-vivaldi.png'],
    },
    [Platform.ios]: {
      deep_link: 'edge://settings/content/camera',
      steps: 'Go to iOS Settings > Browser Name > Camera and allow access.',
      screenshot_urls: ['https://i.ibb.co/bXVvhXB/settings.jpg', 'https://i.ibb.co/Y7m75jF/vivaldi.jpg'],
    },
    [Platform.android]: {
      deep_link: 'edge://settings/content/camera',
      steps: 'Go to Android Settings > Browser Name > Camera and allow access.',
      screenshot_urls: ['https://i.ibb.co/9cpFVFL/vivaldi-2.jpg', 'https://i.ibb.co/vBqSGhq/vivaldi-1.jpg', 'https://i.ibb.co/XzC8s1r/vivaldi.jpg'],
    },
  },
  [Browser.opera]: {
    [Platform.windows]: {
      deep_link: 'opera://settings/content/camera',
      steps: 'Go to Browser Settings > Websites > Camera and enable it.',
      screenshot_urls: ['https://i.ibb.co/G24R9qP/opera-windows-1.png', 'https://i.ibb.co/C65D4qY/opera-windows.png'],
    },
    [Platform.macos]: {
      deep_link: 'opera://settings/content/camera',
      steps: 'Go to Browser Settings > Websites > Camera and enable it.',
      screenshot_urls: ['https://i.ibb.co/G24R9qP/opera-windows-1.png', 'https://i.ibb.co/C65D4qY/opera-windows.png'],
    },
    [Platform.linux]: {
      deep_link: 'opera://settings/content/camera',
      steps: 'Go to Browser Settings > Websites > Camera and enable it.',
      screenshot_urls: ['https://i.ibb.co/G24R9qP/opera-windows-1.png', 'https://i.ibb.co/C65D4qY/opera-windows.png'],
    },
    [Platform.ios]: {
      deep_link: 'opera://settings/content/camera',
      steps: 'Go to iOS Settings > Browser Name > Camera and allow access.',
      screenshot_urls: ['https://i.ibb.co/bXVvhXB/settings.jpg', 'https://i.ibb.co/tz4sz98/opera.jpg'],
    },
    [Platform.android]: {
      deep_link: 'opera://settings/content/camera',
      steps: 'Go to Settings > Apps > Browser Name > Permissions > Camera and enable it.',
      screenshot_urls: ['https://i.ibb.co/k0b3YcB/opera-2.jpg', 'https://i.ibb.co/x1BLLWs/opera-1.jpg', 'https://i.ibb.co/kXyj8H5/opera.jpg'],
    },
  },
  [Browser.unknown]: {
    [Platform.unknown]: {
      deep_link: 'Unknown browser',
      steps: 'No step for Unknown browser',
      screenshot_urls: [],
    },
  },
  [Browser.system]: {
    [Platform.windows]: {
      deep_link: '',
      steps: 'Go to Settings > Privacy Settings > Camera and enable it.',
      screenshot_urls: ['https://i.ibb.co/thyBgB3/windows-settings.png'],
    },
    [Platform.macos]: {
      deep_link: '',
      steps: 'Go to Settings > Privacy Settings > Camera and enable it.',
      screenshot_urls: ['https://i.ibb.co/c1NdZsZ/macos-settings.png'],
    },
    [Platform.linux]: {
      deep_link: '',
      steps: 'Go to Settings > Privacy Settings > Camera and enable it.',
      screenshot_urls: ['https://i.ibb.co/mbyY0r3/linux-settings.png'],
    },
  },
};

export type ErrorMessagesProps = { [key: string]: string };

export const error_messages: ErrorMessagesProps = {
  NotAllowedError: 'Camera access was denied.\n Please allow camera access in your browser settings.',
  NotFoundError: 'No camera found\n. Please connect a camera and try again.',
  NotReadableError: 'The camera is currently in use or there was a hardware error.',
  OverconstrainedError: 'The camera constraints cannot be satisfied by any available device.',
  SecurityError: 'Media access is blocked due to security settings.',
  AbortError: 'The operation was aborted. Please try again.',
  TypeError: 'The constraints parameter was missing or had an incorrect value.',
  SystemError: 'The system error occurred while trying to access the camera.', // all system errors
  Default: 'An unknown error occurred while trying to access the camera.'
};
