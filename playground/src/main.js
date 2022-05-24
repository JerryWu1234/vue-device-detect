import {
  createApp,
  h,
} from 'vue'
import { vueDeviceDetect } from 'vue-device-detect'
import App from './App.vue'

createApp(App).use(vueDeviceDetect).mount('#app')
