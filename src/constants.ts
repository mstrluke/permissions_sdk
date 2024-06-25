// Enum for browsers
export enum Browser {
  chrome = 'chrome',
  firefox = 'firefox',
  safari = 'safari',
  edge = 'edge',
  samsung = 'samsung',
  opera = 'opera',
  unknown = 'unknown',
}

// Enum for platforms
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
  screenshotUrl: string;
}

// Define permission details type
export type PermissionDetails = {
  [browser in Browser]: { [platform in Platform]?: PermissionDetail };
};

// Example usage:
export const permission_details: PermissionDetails = {
  [Browser.chrome]: {
    [Platform.android]: {
      deep_link: 'chrome://settings/content/camera',
      steps: 'Go to Settings > Apps & notifications > Chrome > Permissions > Camera and enable it.',
      screenshotUrl: './assets/chrome_android.png',
    },
    [Platform.windows]: {
      deep_link: 'chrome://settings/content/camera',
      steps: 'Go to Chrome Settings > Privacy and security > Site Settings > Camera and enable it.',
      screenshotUrl: './assets/chrome_windows.png',
    },
    [Platform.macos]: {
      deep_link: 'chrome://settings/content/camera',
      steps: 'Go to Chrome Settings > Privacy and security > Site Settings > Camera and enable it.',
      screenshotUrl: './assets/chrome_macos.png',
    },
    [Platform.ios]: {
      deep_link: 'chrome://settings/content/camera',
      steps: 'Go to iOS Settings > Chrome > Camera and allow access.',
      screenshotUrl: './assets/chrome_ios.png',
    },
    [Platform.linux]: {
      deep_link: 'chrome://settings/content/camera',
      steps: 'Go to Chrome Settings > Privacy and security > Site Settings > Camera and enable it.',
      screenshotUrl: './assets/chrome_linux.png',
    },
  },
  [Browser.firefox]: {
    [Platform.android]: {
      deep_link: 'about:preferences#privacy',
      steps: 'Go to Settings > Apps > Firefox > Permissions > Camera and enable it.',
      screenshotUrl: './assets/firefox_android.png',
    },
    [Platform.windows]: {
      deep_link: 'about:preferences#privacy',
      steps: 'Go to Firefox Settings > Privacy & Security > Permissions > Camera and enable it.',
      screenshotUrl: './assets/firefox_windows.png',
    },
    [Platform.macos]: {
      deep_link: 'about:preferences#privacy',
      steps: 'Go to Firefox Settings > Privacy & Security > Permissions > Camera and enable it.',
      screenshotUrl: './assets/firefox_macos.png',
    },
    [Platform.ios]: {
      deep_link: 'about:preferences#privacy',
      steps: 'Go to iOS Settings > Firefox > Camera and allow access.',
      screenshotUrl: './assets/firefox_ios.png',
    },
    [Platform.linux]: {
      deep_link: 'about:preferences#privacy',
      steps: 'Go to Firefox Settings > Privacy & Security > Permissions > Camera and enable it.',
      screenshotUrl: './assets/firefox_linux.png',
    },
  },
  [Browser.safari]: {
    [Platform.android]: {
      deep_link: 'app-settings://safari',
      steps: 'Go to Android Settings > Safari > Camera and allow access.',
      screenshotUrl: './assets/safari_android.png',
    },
    [Platform.windows]: {
      deep_link: 'app-settings://safari',
      steps: 'Go to Safari Settings > Websites > Camera and enable it.',
      screenshotUrl: './assets/safari_windows.png',
    },
    [Platform.macos]: {
      deep_link: 'x-apple.systempreferences:com.apple.preference.security?Privacy_Camera',
      steps: 'Go to Safari Preferences > Websites > Camera and enable it.',
      screenshotUrl: './assets/safari_macos.png',
    },
    [Platform.ios]: {
      deep_link: 'app-settings://safari',
      steps: 'Go to iOS Settings > Safari > Camera and allow access.',
      screenshotUrl: './assets/safari_ios.png',
    },
    [Platform.linux]: {
      deep_link: 'app-settings://safari',
      steps: 'Go to Safari Settings > Websites > Camera and enable it.',
      screenshotUrl: './assets/safari_linux.png',
    },
  },
  [Browser.edge]: {
    [Platform.android]: {
      deep_link: 'edge://settings/content/camera',
      steps: 'Go to Android Settings > Edge > Camera and allow access.',
      screenshotUrl: './assets/edge_android.png',
    },
    [Platform.windows]: {
      deep_link: 'edge://settings/content/camera',
      steps: 'Go to Edge Settings > Site permissions > Camera and enable it.',
      screenshotUrl: './assets/edge_windows.png',
    },
    [Platform.macos]: {
      deep_link: 'edge://settings/content/camera',
      steps: 'Go to Edge Settings > Site permissions > Camera and enable it.',
      screenshotUrl: './assets/edge_macos.png',
    },
    [Platform.ios]: {
      deep_link: 'edge://settings/content/camera',
      steps: 'Go to iOS Settings > Edge > Camera and allow access.',
      screenshotUrl: './assets/edge_ios.png',
    },
    [Platform.linux]: {
      deep_link: 'edge://settings/content/camera',
      steps: 'Go to Edge Settings > Site permissions > Camera and enable it.',
      screenshotUrl: './assets/edge_linux.png',
    },
  },
  [Browser.samsung]: {
    [Platform.android]: {
      deep_link: 'intent://settings/content/camera',
      steps: 'Go to Settings > Apps > Samsung Internet > Permissions > Camera and enable it.',
      screenshotUrl: './assets/samsung_android.png',
    },
    [Platform.windows]: {
      deep_link: 'intent://settings/content/camera',
      steps: 'Go to Samsung Internet Settings > Site permissions > Camera and enable it.',
      screenshotUrl: './assets/samsung_windows.png',
    },
    [Platform.macos]: {
      deep_link: 'intent://settings/content/camera',
      steps: 'Go to Samsung Internet Settings > Site permissions > Camera and enable it.',
      screenshotUrl: './assets/samsung_macos.png',
    },
    [Platform.ios]: {
      deep_link: 'intent://settings/content/camera',
      steps: 'Go to iOS Settings > Samsung Internet > Camera and allow access.',
      screenshotUrl: './assets/samsung_ios.png',
    },
    [Platform.linux]: {
      deep_link: 'intent://settings/content/camera',
      steps: 'Go to Samsung Internet Settings > Site permissions > Camera and enable it.',
      screenshotUrl: './assets/samsung_linux.png',
    },
  },
  [Browser.opera]: {
    [Platform.android]: {
      deep_link: 'opera://settings/content/camera',
      steps: 'Go to Settings > Apps > Opera > Permissions > Camera and enable it.',
      screenshotUrl: './assets/opera_android.png',
    },
    [Platform.windows]: {
      deep_link: 'opera://settings/content/camera',
      steps: 'Go to Opera Settings > Websites > Camera and enable it.',
      screenshotUrl: './assets/opera_windows.png',
    },
    [Platform.macos]: {
      deep_link: 'opera://settings/content/camera',
      steps: 'Go to Opera Settings > Websites > Camera and enable it.',
      screenshotUrl: './assets/opera_macos.png',
    },
    [Platform.ios]: {
      deep_link: 'opera://settings/content/camera',
      steps: 'Go to iOS Settings > Opera > Camera and allow access.',
      screenshotUrl: './assets/opera_ios.png',
    },
    [Platform.linux]: {
      deep_link: 'opera://settings/content/camera',
      steps: 'Go to Opera Settings > Websites > Camera and enable it.',
      screenshotUrl: './assets/opera_linux.png',
    },
  },
  [Browser.unknown]: {
    [Platform.unknown]: {
      deep_link: 'Unknown browser',
      steps: 'No step for Unknown browser',
      screenshotUrl: './assets/unknown.png',
    },
  },
};
