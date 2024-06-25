export type PermissionDetailsProps = {
  [key: string]: {
    [key: string]: {
      [key: string]: string;
    }
  };
}

export const permission_details: PermissionDetailsProps = {
  chrome: {
    android: {
      deep_link: 'chrome://settings/content/camera',
      steps: 'Go to Settings > Apps & notifications > Chrome > Permissions > Camera and enable it.',
      screenshotUrl: './assets/chrome_android.png',
    },
    windows: {
      deep_link: 'chrome://settings/content/camera',
      steps: 'Go to Chrome Settings > Privacy and security > Site Settings > Camera and enable it.',
      screenshotUrl: './assets/chrome_windows.png',
    },
    macos: {
      deep_link: 'chrome://settings/content/camera',
      steps: 'Go to Chrome Settings > Privacy and security > Site Settings > Camera and enable it.',
      screenshotUrl: './assets/chrome_macos.png',
    },
    ios: {
      deep_link: 'chrome://settings/content/camera',
      steps: 'Go to iOS Settings > Chrome > Camera and allow access.',
      screenshotUrl: './assets/chrome_ios.png',
    },
    linux: {
      deep_link: 'chrome://settings/content/camera',
      steps: 'Go to Chrome Settings > Privacy and security > Site Settings > Camera and enable it.',
      screenshotUrl: './assets/chrome_linux.png',
    },
  },
  firefox: {
    android: {
      deep_link: 'about:preferences#privacy',
      steps: 'Go to Settings > Apps > Firefox > Permissions > Camera and enable it.',
      screenshotUrl: './assets/firefox_android.png',
    },
    windows: {
      deep_link: 'about:preferences#privacy',
      steps: 'Go to Firefox Settings > Privacy & Security > Permissions > Camera and enable it.',
      screenshotUrl: './assets/firefox_windows.png',
    },
    macos: {
      deep_link: 'about:preferences#privacy',
      steps: 'Go to Firefox Settings > Privacy & Security > Permissions > Camera and enable it.',
      screenshotUrl: './assets/firefox_macos.png',
    },
    ios: {
      deep_link: 'about:preferences#privacy',
      steps: 'Go to iOS Settings > Firefox > Camera and allow access.',
      screenshotUrl: './assets/firefox_ios.png',
    },
    linux: {
      deep_link: 'about:preferences#privacy',
      steps: 'Go to Firefox Settings > Privacy & Security > Permissions > Camera and enable it.',
      screenshotUrl: './assets/firefox_linux.png',
    },
  },
  safari: {
    ios: {
      deep_link: 'app-settings://safari',
      steps: 'Go to iOS Settings > Safari > Camera and allow access.',
      screenshotUrl: './assets/safari_ios.png',
    },
    macos: {
      deep_link: 'x-apple.systempreferences:com.apple.preference.security?Privacy_Camera',
      steps: 'Go to Safari Preferences > Websites > Camera and enable it.',
      screenshotUrl: './assets/safari_macos.png',
    },
    windows: {
      deep_link: 'app-settings://safari',
      steps: 'Go to Safari Settings > Websites > Camera and enable it.',
      screenshotUrl: './assets/safari_windows.png',
    },
    android: {
      deep_link: 'app-settings://safari',
      steps: 'Go to Android Settings > Safari > Camera and allow access.',
      screenshotUrl: './assets/safari_android.png',
    },
    linux: {
      deep_link: 'app-settings://safari',
      steps: 'Go to Safari Settings > Websites > Camera and enable it.',
      screenshotUrl: './assets/safari_linux.png',
    },
  },
  edge: {
    windows: {
      deep_link: 'edge://settings/content/camera',
      steps: 'Go to Edge Settings > Site permissions > Camera and enable it.',
      screenshotUrl: './assets/edge_windows.png',
    },
    macos: {
      deep_link: 'edge://settings/content/camera',
      steps: 'Go to Edge Settings > Site permissions > Camera and enable it.',
      screenshotUrl: './assets/edge_macos.png',
    },
    android: {
      deep_link: 'edge://settings/content/camera',
      steps: 'Go to Android Settings > Edge > Camera and allow access.',
      screenshotUrl: './assets/edge_android.png',
    },
    ios: {
      deep_link: 'edge://settings/content/camera',
      steps: 'Go to iOS Settings > Edge > Camera and allow access.',
      screenshotUrl: './assets/edge_ios.png',
    },
    linux: {
      deep_link: 'edge://settings/content/camera',
      steps: 'Go to Edge Settings > Site permissions > Camera and enable it.',
      screenshotUrl: './assets/edge_linux.png',
    },
  },
  samsung: {
    android: {
      deep_link: 'intent://settings/content/camera',
      steps: 'Go to Settings > Apps > Samsung Internet > Permissions > Camera and enable it.',
      screenshotUrl: './assets/samsung_android.png',
    },
    ios: {
      deep_link: 'intent://settings/content/camera',
      steps: 'Go to iOS Settings > Samsung Internet > Camera and allow access.',
      screenshotUrl: './assets/samsung_ios.png',
    },
    windows: {
      deep_link: 'intent://settings/content/camera',
      steps: 'Go to Samsung Internet Settings > Site permissions > Camera and enable it.',
      screenshotUrl: './assets/samsung_windows.png',
    },
    macos: {
      deep_link: 'intent://settings/content/camera',
      steps: 'Go to Samsung Internet Settings > Site permissions > Camera and enable it.',
      screenshotUrl: './assets/samsung_macos.png',
    },
    linux: {
      deep_link: 'intent://settings/content/camera',
      steps: 'Go to Samsung Internet Settings > Site permissions > Camera and enable it.',
      screenshotUrl: './assets/samsung_linux.png',
    },
  },
  opera: {
    android: {
      deep_link: 'opera://settings/content/camera',
      steps: 'Go to Settings > Apps > Opera > Permissions > Camera and enable it.',
      screenshotUrl: './assets/opera_android.png',
    },
    windows: {
      deep_link: 'opera://settings/content/camera',
      steps: 'Go to Opera Settings > Websites > Camera and enable it.',
      screenshotUrl: './assets/opera_windows.png',
    },
    macos: {
      deep_link: 'opera://settings/content/camera',
      steps: 'Go to Opera Settings > Websites > Camera and enable it.',
      screenshotUrl: './assets/opera_macos.png',
    },
    ios: {
      deep_link: 'opera://settings/content/camera',
      steps: 'Go to iOS Settings > Opera > Camera and allow access.',
      screenshotUrl: './assets/opera_ios.png',
    },
    linux: {
      deep_link: 'opera://settings/content/camera',
      steps: 'Go to Opera Settings > Websites > Camera and enable it.',
      screenshotUrl: './assets/opera_linux.png',
    },
  },
};