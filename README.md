Permission managment sdk js

Import CameraPermission class:
`import CameraPermission from 'permission-sdk';`
Import modal styles:
`import 'permission-sdk/lib/styles.css';`

### Using default messages:

```
import { useEffect } = 'react';
import CameraPermission from 'permission-sdk';
...

const { getCameraPermission } = new CameraPermission();

useEffect(async () => {
  const {
    success: boolean;
    stream?: MediaStream;
    error?: { name: string, message: string };
    steps?: string;
    screenshotUrl?: string;
    deep_link?: string;
    openDeepLink?: () => void;
    showSteps?: () => void;
  } = await getCameraPermission();

  try {
    openDeepLink();
  } catch {
    showSteps();
  }
}, []);
...

```
### You can use your own messages, steps, screenshot_urls

```
import { useEffect } = 'react';
import CameraPermission from 'permission-sdk';
...

const { getCameraPermission } = new CameraPermission({
  chrome: {
    android: {
      deep_link: 'chrome://settings/content/camera',
      steps: 'Go to Settings > Apps & notifications > Chrome > Permissions > Camera and enable it.',
      screenshot_url: './assets/chrome_android.png',
    }
  }
  ...
});

useEffect(async () => {
  const {
    success: boolean;
    stream?: MediaStream;
    error?: { name: string, message: string };
    steps?: string;
    screenshot_url?: string;
    deep_link?: string;
    openDeepLink?: () => void;
    showSteps?: () => void;
  } = await getCameraPermission();

  try {
    openDeepLink();
  } catch {
    showSteps();
  }
}, []);
...

```

### Creating own modal;

```
import { useEffect, useState } = 'react';
import CameraPermission from 'permission-sdk';
...
const [modalData, setModalData] = useState(null);
const { getCameraPermission } = new CameraPermission();

useEffect(async () => {
  const {
    success: boolean;
    stream?: MediaStream;
    error?: { name: string, message: string };
    steps?: string;
    screenshotUrl?: string;
    deep_link?: string;
    openDeepLink?: () => void;
    showSteps?: () => void;
  } = await getCameraPermission();

  try {
    openDeepLink();
  } catch {
    setModalData({ steps, screenshotUrl, error })
  }
}, []);

const closeModal = () => setModalData(null);

if (modalData) return (
  <div>
    <h1>{modalData.error.name}</h1>
    <p>{modalData.error.message}</p>
    <p>{modalData.steps}</p>
    <div>
      <button onClick={closeModal}>Ok</button>
      <button onClick={closeModal}>Close</button>
    </div>
  </div>
)
...
```

### Modal customization: 
Overlay classname: `permissions_modal__overlay`;

Modal classname: `permissions_modal`;

Buttons Container classname: `permissions_modal__buttons`;

Button classname: `permissions_modal__button`;

Ok Button classname: `permissions_modal__button-ok`;

Cancel Button classname: `permissions_modal__button-cancel`;

Title classname: `permissions_modal__title`;

Sub-Title classname: `permissions_modal__sub-title`;

Img classname: `permissions_modal__image`;