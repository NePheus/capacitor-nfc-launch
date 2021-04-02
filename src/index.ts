import { registerPlugin } from '@capacitor/core';

import type { NFCLaunchPlugin } from './definitions';

const NFCLaunch = registerPlugin<NFCLaunchPlugin>('NFCLaunch', {
  web: () => import('./web').then(m => new m.NFCLaunchWeb()),
});

export * from './definitions';
export { NFCLaunch };
