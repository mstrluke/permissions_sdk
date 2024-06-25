export declare enum Browser {
    chrome = "chrome",
    firefox = "firefox",
    safari = "safari",
    edge = "edge",
    samsung = "samsung",
    opera = "opera",
    unknown = "unknown"
}
export declare enum Platform {
    android = "android",
    windows = "windows",
    macos = "macos",
    ios = "ios",
    linux = "linux",
    unknown = "unknown"
}
export type PermissionDetail = {
    deep_link: string;
    steps: string;
    screenshot_url: string;
};
export type PermissionDetails = {
    [browser in Browser]: {
        [platform in Platform]?: PermissionDetail;
    };
};
export declare const permission_details: PermissionDetails;
export declare const error_messages: {
    [key: string]: string;
};
