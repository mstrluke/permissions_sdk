"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createModal = ({ steps, screenshot_urls, message }) => {
    const body = document.body;
    const overlay = document.createElement('div');
    const modal = document.createElement('div');
    const title = document.createElement('p');
    const subTitle = document.createElement('p');
    const buttonContainer = document.createElement('div');
    const okButton = document.createElement('button');
    const cancelButton = document.createElement('button');
    const imgs = [];
    // Add class names
    overlay.className = 'permissions_modal__overlay';
    modal.className = 'permissions_modal';
    buttonContainer.className = 'permissions_modal__buttons';
    okButton.className = 'permissions_modal__button permissions_modal__button-ok';
    cancelButton.className = 'permissions_modal__button permissions_modal__button-cancel';
    title.className = 'permissions_modal__title';
    subTitle.className = 'permissions_modal__sub-title';
    okButton.innerText = 'OK';
    cancelButton.innerText = 'Cancel';
    title.innerHTML = message;
    subTitle.innerHTML = steps;
    screenshot_urls.forEach((screenshot_url) => {
        const a = document.createElement('a');
        const img = document.createElement('img');
        a.className = 'permissions_modal__image-link';
        a.style.maxWidth = 100 / screenshot_urls.length - 10 + '%';
        a.href = screenshot_url;
        a.target = '_blank';
        img.className = 'permissions_modal__image';
        img.src = screenshot_url;
        a.appendChild(img);
        imgs.push(a);
    });
    const closeModal = () => {
        overlay.remove();
        modal.remove();
    };
    document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape')
            closeModal();
    });
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay)
            closeModal();
    });
    okButton.addEventListener('click', closeModal);
    cancelButton.addEventListener('click', closeModal);
    modal.append(title, subTitle, ...imgs, buttonContainer);
    buttonContainer.append(okButton, cancelButton);
    overlay.appendChild(modal);
    body.appendChild(overlay);
};
exports.default = createModal;
