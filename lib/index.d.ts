import { ErrorMessagesProps, PermissionDetails } from './constants';
export interface PermissionResult {
    success: boolean;
    stream?: MediaStream;
    error?: {
        name: string;
        message: string;
    };
    steps?: string;
    screenshot_url?: string;
    deep_link?: string;
    openDeepLink?: () => void;
    showSteps?: () => void;
}
declare class CameraPermission {
    private permissions_data;
    private errors_data;
    constructor(permissions_data?: PermissionDetails, errors_data?: ErrorMessagesProps);
    getCameraPermission(): Promise<PermissionResult>;
    private handlePermissionDenied;
}
export default CameraPermission;
