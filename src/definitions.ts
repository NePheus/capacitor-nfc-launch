import { PluginListenerHandle } from '@capacitor/core';

export interface NFCLaunchPlugin {
    addListener(
      eventName: 'message',
      listenerFunc: MessageListener,
    ): Promise<PluginListenerHandle> & PluginListenerHandle;
}

export type MessageListener = (data: any) => void;
