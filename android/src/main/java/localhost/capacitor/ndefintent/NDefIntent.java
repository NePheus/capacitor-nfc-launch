package localhost.capacitor.ndefintent;

import android.content.Intent;
import android.nfc.NdefMessage;
import android.nfc.NfcAdapter;
import android.os.Parcelable;

public class NDefIntent {
    public String readNDefMessage(Intent intent) {
        Parcelable[] ndefMessageArray = intent.getParcelableArrayExtra(NfcAdapter.EXTRA_NDEF_MESSAGES);
        NdefMessage ndefMessage = (NdefMessage) ndefMessageArray[0];
        String message = new String(ndefMessage.getRecords()[0].getPayload());
        return message;
    }
}
