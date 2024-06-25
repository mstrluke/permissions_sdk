export type CreateModalProps = {
    steps: string;
    screenshot_url: string;
    error_message: string;
};
declare const createModal: ({ steps, screenshot_url, error_message }: CreateModalProps) => void;
export default createModal;
