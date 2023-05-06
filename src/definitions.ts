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

  /**
   * Removes all listeners.
   */
  removeAllListeners(): Promise<void>;
}

export type MessageListener = (response: any) => void;
