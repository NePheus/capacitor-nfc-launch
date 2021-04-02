# capacitor-nfc-launch

This plugin reads the message of a NFC tag. Just tap the device on a NFC tag and you will get the response in the 'message' listener. Your app will also start automatically and trigger the event listener.

This is only implemented for Android by listening to new intents of the type 'ACTION_NDEF_DISCOVERED'.

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
    <data android:mimeType="application/APPBUNDLEID" />
</intent-filter>
```

## How to write the tag

Download and open the app NFC Tools. Choose 'write' and add a dataset of the type 'data' (last entry in list).
Content-Type: application/APPBUNDLEID
Data: 'My example data'

## Usage

app.component.ts

```
if (Capacitor.isNativePlatform()) {
    NDefIntent.addListener('message', (data: any) => {
        console.log(data.message); // Outputs: My example data
    });
}
```
