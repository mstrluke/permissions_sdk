import { PermissionDetails } from './constants';
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
    private data;
    constructor(data?: PermissionDetails);
    getCameraPermission(): Promise<PermissionResult>;
    private handlePermissionDenied;
}
export default CameraPermission;
