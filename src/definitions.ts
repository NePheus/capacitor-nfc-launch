import { PluginListenerHandle } from '@capacitor/core';

export interface NFCLaunchPlugin {
  /**
   * Add a listener to a NFC message event
   * @param eventName
   * @param listenerFunc
   */
  addListener(
    eventName: 'message',
    listenerFunc: MessageListener,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;
}

export type MessageListener = (response: any) => void;
