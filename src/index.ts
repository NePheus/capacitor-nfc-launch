import { registerPlugin } from '@capacitor/core';

import type { NDefIntentPlugin } from './definitions';

const NDefIntent = registerPlugin<NDefIntentPlugin>('NDefIntent', {});

export * from './definitions';
export { NDefIntent };
