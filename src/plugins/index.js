/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'
import { store } from '@/store'
import { createDeviceDetector } from "next-vue-device-detector";

export const device = createDeviceDetector()

export function registerPlugins (app) {
  app
    .use(store)
    .use(vuetify)
    .use(device)
    .use(router)
}
