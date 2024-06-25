Permission managment sdk js

### To create build
`[yarn | npm | pnpm] run build`
### To test build
in root dir of permission-sdk run `npm link`

in any other project root run `npm link permission-sdk`
and you good to go

### Usage

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
### You can use your own deep_link, steps, screenshot_urls and messages

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
}, {
  NotAllowedError: 'Camera access was denied.\n Please allow camera access in your browser settings.',
  NotFoundError: 'No camera found\n. Please connect a camera and try again.',
  NotReadableError: 'The camera is currently in use or there was a hardware error.',
  OverconstrainedError: 'The camera constraints cannot be satisfied by any available device.',
  SecurityError: 'Media access is blocked due to security settings.',
  AbortError: 'The operation was aborted. Please try again.',
  TypeError: 'The constraints parameter was missing or had an incorrect value.',
  SystemError: 'The system error occurred while trying to access the camera.',
  Default: 'An unknown error occurred while trying to access the camera.'
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