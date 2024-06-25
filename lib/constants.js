export var Browser;
(function (Browser) {
    Browser["chrome"] = "chrome";
    Browser["firefox"] = "firefox";
    Browser["safari"] = "safari";
    Browser["edge"] = "edge";
    Browser["samsung"] = "samsung";
    Browser["opera"] = "opera";
    Browser["unknown"] = "unknown";
})(Browser || (Browser = {}));
export var Platform;
(function (Platform) {
    Platform["android"] = "android";
    Platform["windows"] = "windows";
    Platform["macos"] = "macos";
    Platform["ios"] = "ios";
    Platform["linux"] = "linux";
    Platform["unknown"] = "unknown";
})(Platform || (Platform = {}));
export const permission_details = {
    [Browser.chrome]: {
        [Platform.android]: {
            deep_link: 'chrome://settings/content/camera',
            steps: 'Go to Settings > Apps & notifications > Chrome > Permissions > Camera and enable it.',
            screenshot_url: './assets/chrome_android.png',
        },
        [Platform.windows]: {
            deep_link: 'chrome://settings/content/camera',
            steps: 'Go to Chrome Settings > Privacy and security > Site Settings > Camera and enable it.',
            screenshot_url: './assets/chrome_windows.png',
        },
        [Platform.macos]: {
            deep_link: 'chrome://settings/content/camera',
            steps: 'Go to Chrome Settings > Privacy and security > Site Settings > Camera and enable it.',
            screenshot_url: './assets/chrome_macos.png',
        },
        [Platform.ios]: {
            deep_link: 'chrome://settings/content/camera',
            steps: 'Go to iOS Settings > Chrome > Camera and allow access.',
            screenshot_url: './assets/chrome_ios.png',
        },
        [Platform.linux]: {
            deep_link: 'chrome://settings/content/camera',
            steps: 'Go to Chrome Settings > Privacy and security > Site Settings > Camera and enable it.',
            screenshot_url: './assets/chrome_linux.png',
        },
    },
    [Browser.firefox]: {
        [Platform.android]: {
            deep_link: 'about:preferences#privacy',
            steps: 'Go to Settings > Apps > Firefox > Permissions > Camera and enable it.',
            screenshot_url: './assets/firefox_android.png',
        },
        [Platform.windows]: {
            deep_link: 'about:preferences#privacy',
            steps: 'Go to Firefox Settings > Privacy & Security > Permissions > Camera and enable it.',
            screenshot_url: './assets/firefox_windows.png',
        },
        [Platform.macos]: {
            deep_link: 'about:preferences#privacy',
            steps: 'Go to Firefox Settings > Privacy & Security > Permissions > Camera and enable it.',
            screenshot_url: './assets/firefox_macos.png',
        },
        [Platform.ios]: {
            deep_link: 'about:preferences#privacy',
            steps: 'Go to iOS Settings > Firefox > Camera and allow access.',
            screenshot_url: './assets/firefox_ios.png',
        },
        [Platform.linux]: {
            deep_link: 'about:preferences#privacy',
            steps: 'Go to Firefox Settings > Privacy & Security > Permissions > Camera and enable it.',
            screenshot_url: './assets/firefox_linux.png',
        },
    },
    [Browser.safari]: {
        [Platform.android]: {
            deep_link: 'app-settings://safari',
            steps: 'Go to Android Settings > Safari > Camera and allow access.',
            screenshot_url: './assets/safari_android.png',
        },
        [Platform.windows]: {
            deep_link: 'app-settings://safari',
            steps: 'Go to Safari Settings > Websites > Camera and enable it.',
            screenshot_url: './assets/safari_windows.png',
        },
        [Platform.macos]: {
            deep_link: 'x-apple.systempreferences:com.apple.preference.security?Privacy_Camera',
            steps: 'Go to Safari Preferences > Websites > Camera and enable it.',
            screenshot_url: './assets/safari_macos.png',
        },
        [Platform.ios]: {
            deep_link: 'app-settings://safari',
            steps: 'Go to iOS Settings > Safari > Camera and allow access.',
            screenshot_url: './assets/safari_ios.png',
        },
        [Platform.linux]: {
            deep_link: 'app-settings://safari',
            steps: 'Go to Safari Settings > Websites > Camera and enable it.',
            screenshot_url: './assets/safari_linux.png',
        },
    },
    [Browser.edge]: {
        [Platform.android]: {
            deep_link: 'edge://settings/content/camera',
            steps: 'Go to Android Settings > Edge > Camera and allow access.',
            screenshot_url: './assets/edge_android.png',
        },
        [Platform.windows]: {
            deep_link: 'edge://settings/content/camera',
            steps: 'Go to Edge Settings > Site permissions > Camera and enable it.',
            screenshot_url: './assets/edge_windows.png',
        },
        [Platform.macos]: {
            deep_link: 'edge://settings/content/camera',
            steps: 'Go to Edge Settings > Site permissions > Camera and enable it.',
            screenshot_url: './assets/edge_macos.png',
        },
        [Platform.ios]: {
            deep_link: 'edge://settings/content/camera',
            steps: 'Go to iOS Settings > Edge > Camera and allow access.',
            screenshot_url: './assets/edge_ios.png',
        },
        [Platform.linux]: {
            deep_link: 'edge://settings/content/camera',
            steps: 'Go to Edge Settings > Site permissions > Camera and enable it.',
            screenshot_url: './assets/edge_linux.png',
        },
    },
    [Browser.samsung]: {
        [Platform.android]: {
            deep_link: 'intent://settings/content/camera',
            steps: 'Go to Settings > Apps > Samsung Internet > Permissions > Camera and enable it.',
            screenshot_url: './assets/samsung_android.png',
        },
        [Platform.windows]: {
            deep_link: 'intent://settings/content/camera',
            steps: 'Go to Samsung Internet Settings > Site permissions > Camera and enable it.',
            screenshot_url: './assets/samsung_windows.png',
        },
        [Platform.macos]: {
            deep_link: 'intent://settings/content/camera',
            steps: 'Go to Samsung Internet Settings > Site permissions > Camera and enable it.',
            screenshot_url: './assets/samsung_macos.png',
        },
        [Platform.ios]: {
            deep_link: 'intent://settings/content/camera',
            steps: 'Go to iOS Settings > Samsung Internet > Camera and allow access.',
            screenshot_url: './assets/samsung_ios.png',
        },
        [Platform.linux]: {
            deep_link: 'intent://settings/content/camera',
            steps: 'Go to Samsung Internet Settings > Site permissions > Camera and enable it.',
            screenshot_url: './assets/samsung_linux.png',
        },
    },
    [Browser.opera]: {
        [Platform.android]: {
            deep_link: 'opera://settings/content/camera',
            steps: 'Go to Settings > Apps > Opera > Permissions > Camera and enable it.',
            screenshot_url: './assets/opera_android.png',
        },
        [Platform.windows]: {
            deep_link: 'opera://settings/content/camera',
            steps: 'Go to Opera Settings > Websites > Camera and enable it.',
            screenshot_url: './assets/opera_windows.png',
        },
        [Platform.macos]: {
            deep_link: 'opera://settings/content/camera',
            steps: 'Go to Opera Settings > Websites > Camera and enable it.',
            screenshot_url: './assets/opera_macos.png',
        },
        [Platform.ios]: {
            deep_link: 'opera://settings/content/camera',
            steps: 'Go to iOS Settings > Opera > Camera and allow access.',
            screenshot_url: './assets/opera_ios.png',
        },
        [Platform.linux]: {
            deep_link: 'opera://settings/content/camera',
            steps: 'Go to Opera Settings > Websites > Camera and enable it.',
            screenshot_url: './assets/opera_linux.png',
        },
    },
    [Browser.unknown]: {
        [Platform.unknown]: {
            deep_link: 'Unknown browser',
            steps: 'No step for Unknown browser',
            screenshot_url: './assets/unknown.png',
        },
    },
};
export const error_messages = {
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