import type { Plugin } from 'vue'
import list from './component/index'
export const vueDeviceDetect: Plugin = {
  install(app) {
    for (const key in list)
      app.component(list[key].name, list[key])
  },
}
