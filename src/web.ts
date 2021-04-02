import { WebPlugin } from '@capacitor/core';

import { MessageListener, NFCLaunchPlugin } from './definitions';

export class NFCLaunchWeb extends WebPlugin implements NFCLaunchPlugin {
  addListener(eventName: 'message', listenerFunc: MessageListener) {
    listenerFunc(null);
    return Promise.reject(`Method '${eventName}' not implemented.`) as any;
  }
}
