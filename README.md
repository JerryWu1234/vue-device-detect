## vue-device-detect

检测设备类型，根据设备类型渲染内容

## 安装

```
npm install vue-device-detect --save

or

yarn add vue-device-detect
```

## 使用

Example:

内置的组件渲染

```ts
// main.ts
import { vueDeviceDetect } from 'vue-device-detect'

app.use(vueDeviceDetect)
```
内置的组件
```ts
export interface GlobalComponents {
  BrowserView: void
  ChromeView: void
  EdgeView: void
  MobileView: void
  WindowsView: void
  SafariView: void
  AndroidView: void
}
```

```html
<BrowserView>
  <h1>This is rendered only in browser</h1>
</BrowserView>
<MobileView>
  <h1>This is rendered only on mobile</h1>
</MobileView>
```



你也可以通过内置的API判断
```ts
// main.ts
import { isMobile } from 'vue-device-detect'
```

##API

### Selectors

Available selectors:

| prop               | type    | description                                                                            |
| ------------------ | ------- | -------------------------------------------------------------------------------------- |
| isMobile           | bool    | 设备类型为 `mobile` or `tablet`                                                          |
| isMobileOnly       | bool    | 设备类型为 `mobile`                                                                      |
| isTablet           | bool    | 设备类型为 `tablet`                                                                      |
| isBrowser (legacy) | bool    | 设备类型为 `browser`                                                                     |
| isDesktop          | bool    | 设备类型为 `browser` (an alias of the isBrowser type                                     |
| isSmartTV          | bool    | 设备类型为 `smarttv`                                                                     |
| isWearable         | bool    | 设备类型为 `wearable`                                                                    |
| isConsole          | bool    | 设备类型为 `console`                                                                     |
| isEmbedded         | bool    | 设备类型为 `embedded`                                                                    |
| isAndroid          | bool    | 操作系统为 `Android`                                                                     |
| isWinPhone         | bool    | 操作系统为 `Windows Phone`                                                               |
| isIOS              | bool    | 操作系统为 `iOS`                                                                         |
| isChrome           | bool    | 浏览器类型 `Chrome`                                                                      |
| isFirefox          | bool    | 浏览器类型 `Firefox`                                                                     |
| isSafari           | bool    | 浏览器类型 `Safari`                                                                      |
| isOpera            | bool    | 浏览器类型 `Opera`                                                                       |
| isIE               | bool    | 浏览器类型 `Internet Explorer`                                                           |
| isEdge             | bool    | 浏览器类型 `Edge` or `Edge Chromium`                                                     |
| isYandex           | bool    | 浏览器类型 `Yandex`                                                                      |
| isChromium         | bool    | 浏览器类型 `Chromium`                                                                    |
| isMobileSafari     | bool    | 浏览器类型 `Mobile Safari`                                                               |
| isSamsungBrowser   | bool    | 浏览器类型 `Samsung Browser`                                                             |
| osVersion          | string  | 返回操作版本                                                                             |
| osName             | string  | 返回操作系统名字                                                                          | 
| browserName        | string  | 返回浏览器名字                                                                            |
| mobileVendor       | string  | 手机品牌 (e.g `LG`, `iPhone` etc)                                  |
| mobileModel        | string  | 手机设备类型 (e.g `Nexus 5`)                                            |
| engineName         | string  | 浏览器引擎的 `name` (e.g `Gecko` for FF or `Blink` for Chrome)               |
| deviceType         | string  | 设备类型 ( `mobile` or `tablet`)                                         |
| isIOS13            | boolean |  iOS13                                       |
| isIPhone13         | boolean |  iOS13                            |
| isIPad13           | boolean |  iOS13                              |
| isIPod13           | boolean | iOS13                              |
| isElectron         | boolean |  `Electron`                                            |
| isEdgeChromium     | boolean |  `Edge Chromium`                                                                       |
| isLegacyEdge       | boolean | 浏览器类型 `Edge`                                                                        |
| isWindows          | boolean | returns true/false if os is `Windows`                                                  |
| isMacOs            | boolean | `Mac OS`                                                                               |
