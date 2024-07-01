export type CreateModalProps = {
    steps: string;
    screenshot_urls: string[];
    message: string;
};
declare const createModal: ({ steps, screenshot_urls, message }: CreateModalProps) => void;
export default createModal;
