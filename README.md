[![npm version](https://badge.fury.io/js/capacitor-nfc-launch.svg)](https://badge.fury.io/js/capacitor-nfc-launch)
[![capacitor support](https://img.shields.io/badge/capacitor%20support-v4-brightgreen?logo=capacitor)](https://capacitorjs.com/)

# capacitor-nfc-launch

This plugin reads the message of a self-written NFC tag. Just tap the device on a NFC tag and you will get the response in the 'message' listener. Your app will also start automatically and trigger the event listener.

## Supported platforms

| Platform | Supported |
| -------- | --------: |
| Android  |         ✔ |
| iOS      |         ✖ |
| Web      |         ✖ |

## Install

```bash
npm i capacitor-nfc-launch
npx cap sync android
```

AndroidManifest.xml

```
<intent-filter android:autoVerify="true">
    <action android:name="android.nfc.action.NDEF_DISCOVERED"/>
    <category android:name="android.intent.category.DEFAULT" />
    // The plugin will only fire the event, if a NFC tag with this Content-Type has been sent
    <data android:mimeType="application/APPBUNDLEID" />
</intent-filter>
```

## How to write the tag

Download and open the app NFC Tools. Choose 'write' and add a dataset of the type 'data' (last entry in list).
Content-Type: application/APPBUNDLEID
Data: 'My example data'

## Usage

app.component.ts

```javascript
import { NFCLaunch } from 'capacitor-nfc-launch';

if (Capacitor.isNativePlatform()) {
  NFCLaunch.addListener('message', (data: any) => {
    console.log(data.message); // Outputs: My example data
  });
}
```

## API

<docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### addListener(...)

```typescript
addListener(eventName: 'message', listenerFunc: MessageListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Add a listener to a NFC message event

| Param              | Type                                    |
| ------------------ | --------------------------------------- |
| **`eventName`**    | <code>"message"</code>                  |
| **`listenerFunc`** | <code>(response: any) =&gt; void</code> |

**Returns:** <code>any</code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                      |
| ------------ | ------------------------- |
| **`remove`** | <code>() =&gt; any</code> |

</docgen-api>
