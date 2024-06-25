export type CreateModalProps = {
  steps: string;
  screenshot_url: string;
  error_message: string;
};

const createModal = ({ steps, screenshot_url, error_message }: CreateModalProps) => {
  const body = document.body;
  const overlay = document.createElement('div');
  const modal = document.createElement('div');
  const title = document.createElement('p');
  const subTitle = document.createElement('p');
  const img = document.createElement('img');
  const buttonContainer = document.createElement('div');
  const okButton = document.createElement('button');
  const cancelButton = document.createElement('button');

  // Add class names
  overlay.className = 'permissions_modal__overlay';
  modal.className = 'permissions_modal';
  buttonContainer.className = 'permissions_modal__buttons';
  okButton.className = 'permissions_modal__button permissions_modal__button-ok';
  cancelButton.className = 'permissions_modal__button permissions_modal__button-cancel';
  title.className = 'permissions_modal__title';
  subTitle.className = 'permissions_modal__sub-title';
  img.className = 'permissions_modal__image';

  okButton.innerText = 'OK';
  cancelButton.innerText = 'Cancel';
  title.innerHTML = error_message;
  subTitle.innerHTML = steps;
  img.src = screenshot_url;

  const closeModal = () => {
    overlay.remove();
    modal.remove();
  };

  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  okButton.addEventListener('click', closeModal);
  cancelButton.addEventListener('click', closeModal);

  modal.append(title, subTitle, img, buttonContainer);
  buttonContainer.append(okButton, cancelButton);
  overlay.appendChild(modal);
  body.appendChild(overlay);
};

export default createModal;
