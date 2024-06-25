export type CreateModalProps = {
    steps: string;
    screenshot_url: string;
    message: string;
};
declare const createModal: ({ steps, screenshot_url, message }: CreateModalProps) => void;
export default createModal;
