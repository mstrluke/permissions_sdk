export type CreateModalProps = {
  steps: string;
  screenshotUrl: string;
};

const createModal = ({ steps, screenshotUrl }: CreateModalProps) => {
  const body = document.getElementsByTagName('body')[0];
  const overlay = document.createElement('div');
  const modal = document.createElement('div');
  const title = document.createElement('p');
  const img = document.createElement('img');
  const buttonContainer = document.createElement('div');
  const okButton = document.createElement('button');
  const cancelButton = document.createElement('button');

  // Add overlay styles
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  overlay.style.zIndex = '999';

  // Add modal styles
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.backgroundColor = '#282828';
  modal.style.padding = '20px';
  modal.style.zIndex = '1000';
  modal.style.borderRadius = '6px';
  modal.style.minWidth = '420px';
  modal.style.display = 'flex';
  modal.style.flexWrap = 'wrap';


  // Add button container styles
  buttonContainer.style.display = 'flex';
  buttonContainer.style.justifyContent = 'flex-end';
  buttonContainer.style.marginTop = '20px';
  buttonContainer.style.width = '100%';

  // Add button styles
  okButton.innerText = 'OK';
  cancelButton.innerText = 'Cancel';

  okButton.style.padding = '10px 20px';
  cancelButton.style.padding = '10px 20px';

  okButton.style.backgroundColor = '#4CAF50';
  okButton.style.color = 'white';
  okButton.style.border = 'none';
  okButton.style.cursor = 'pointer';
  okButton.style.borderRadius = '6px';

  cancelButton.style.backgroundColor = '#f44336';
  cancelButton.style.color = 'white';
  cancelButton.style.border = 'none';
  cancelButton.style.cursor = 'pointer';
  cancelButton.style.marginLeft = '20px';
  cancelButton.style.borderRadius = '6px';

  title.innerHTML = steps;
  title.style.marginBottom = '20px';
  title.style.color = 'white';
  title.style.width = '100%';
  //@ts-ignore-next-line
  img.src = 'https://techwiser.com/wp-content/uploads/2021/11/Settings-on-iPhone.jpg';
  img.style.maxHeight = '320px';
  img.style.objectFit = 'contain';
  img.style.flex = '1';

  // Close modal on 'Escape' key press
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      overlay.remove();
      modal.remove();
    }
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.remove();
      modal.remove();
    }
  });

  okButton.addEventListener('click', () => {
    overlay.remove();
    modal.remove();
  });

  cancelButton.addEventListener('click', () => {
    overlay.remove();
    modal.remove();
  });

  modal.appendChild(title);
  modal.appendChild(img);
  modal.appendChild(img);
  buttonContainer.appendChild(okButton);
  buttonContainer.appendChild(cancelButton);
  modal.appendChild(buttonContainer);
  overlay.appendChild(modal);
  body.appendChild(overlay);
};

export default createModal;
