export declare enum Browser {
    chrome = "chrome",
    firefox = "firefox",
    safari = "safari",
    edge = "edge",
    samsung = "samsung",
    opera = "opera",
    brave = "brave",
    vivaldi = "vivaldi",
    unknown = "unknown",
    system = "system"
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
    screenshot_urls: string[];
};
export type PermissionDetails = {
    [key: string]: {
        [key: string]: PermissionDetail;
    };
};
export declare const permission_details: PermissionDetails;
export type ErrorMessagesProps = {
    [key: string]: string;
};
export declare const error_messages: ErrorMessagesProps;
