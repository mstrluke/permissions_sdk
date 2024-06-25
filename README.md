Permission managment sdk js

Using default messages:

```
import { useEffect } = 'react';
import CameraPermission from 'permission-sdk';

const { getCameraPermission } = new CameraPermission();

useEffect(async () => {
  const {
    success: boolean;
    stream?: MediaStream;
    message?: string;
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

```
You can use your own messages, steps, screenshot_urls
Using own messages:

```
import { useEffect } = 'react';
import CameraPermission from 'permission-sdk';

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
    message?: string;
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

```