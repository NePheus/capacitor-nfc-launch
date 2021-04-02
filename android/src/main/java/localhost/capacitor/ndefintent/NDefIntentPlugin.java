package localhost.capacitor.ndefintent;

import android.content.Intent;
import android.nfc.NfcAdapter;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "NDefIntent")
public class NDefIntentPlugin extends Plugin {
    private NDefIntent implementation = new NDefIntent();

    /**
     * Listen for ACTION_NDEF_DISCOVERED intents
     * @param intent
     */
    @Override
    protected void handleOnNewIntent(Intent intent) {
        super.handleOnNewIntent(intent);

        if (intent.getAction().equals(NfcAdapter.ACTION_NDEF_DISCOVERED)) {
            JSObject ret = new JSObject();
            ret.put("message", implementation.readNDefMessage(intent));
            notifyListeners("message", ret, true);
        }
    }
}
