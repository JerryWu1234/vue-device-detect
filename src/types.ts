import type UAParser from 'ua-parser-js'
import { BrowserTypes, DeviceTypes, OsTypes } from './constants/constants'
import { getNavigatorInstance, isIOS13Check, setDefaults } from './util'
// device types
export const isMobileType = ({ type }: UAParser.IDevice) => type === DeviceTypes.Mobile
export const isTabletType = ({ type }: UAParser.IDevice) => type === DeviceTypes.Tablet
export const isMobileAndTabletType = ({ type }: UAParser.IDevice) =>
  type === DeviceTypes.Mobile || type === DeviceTypes.Tablet
export const isSmartTVType = ({ type }: UAParser.IDevice) => type === DeviceTypes.SmartTv
export const isBrowserType = ({ type }: UAParser.IDevice) => type === DeviceTypes.Browser
export const isWearableType = ({ type }: UAParser.IDevice) => type === DeviceTypes.Wearable
export const isConsoleType = ({ type }: UAParser.IDevice) => type === DeviceTypes.Console
export const isEmbeddedType = ({ type }: UAParser.IDevice) => type === DeviceTypes.Embedded
export const getMobileVendor = ({ vendor }: UAParser.IDevice) => setDefaults(vendor)
export const getMobileModel = ({ model }: UAParser.IDevice) => setDefaults(model)
export const getDeviceType = ({ type }: UAParser.IDevice) => setDefaults(type, 'browser')

// os types
export const isAndroidType = ({ name }: UAParser.IOS) => name === OsTypes.Android
export const isWindowsType = ({ name }: UAParser.IOS) => name === OsTypes.Windows
export const isMacOsType = ({ name }: UAParser.IOS) => name === OsTypes.MAC_OS
export const isWinPhoneType = ({ name }: UAParser.IOS) => name === OsTypes.WindowsPhone
export const isIOSType = ({ name }: UAParser.IOS) => name === OsTypes.IOS
export const getOsVersion = ({ version }: UAParser.IOS) => setDefaults(version)
export const getOsName = ({ name }: UAParser.IOS) => setDefaults(name)

// browser types
export const isChromeType = ({ name }: UAParser.IBrowser) => name === BrowserTypes.Chrome
export const isFirefoxType = ({ name }: UAParser.IBrowser) => name === BrowserTypes.Firefox
export const isChromiumType = ({ name }: UAParser.IBrowser) => name === BrowserTypes.Chromium
export const isEdgeType = ({ name }: UAParser.IBrowser) => name === BrowserTypes.Edge
export const isYandexType = ({ name }: UAParser.IBrowser) => name === BrowserTypes.Yandex
export const isSafariType = ({ name }: UAParser.IBrowser) =>
  name === BrowserTypes.Safari || name === BrowserTypes.MobileSafari
export const isMobileSafariType = ({ name }: UAParser.IBrowser) => name === BrowserTypes.MobileSafari
export const isOperaType = ({ name }: UAParser.IBrowser) => name === BrowserTypes.Opera
export const isIEType = ({ name }: UAParser.IBrowser) =>
  name === BrowserTypes.InternetExplorer || name === BrowserTypes.Ie
export const isMIUIType = ({ name }: UAParser.IBrowser) => name === BrowserTypes.MIUI
export const isSamsungBrowserType = ({ name }: UAParser.IBrowser) => name === BrowserTypes.SamsungBrowser
export const getBrowserFullVersion = ({ version }: UAParser.IBrowser) => setDefaults(version)
export const getBrowserVersion = ({ major }: UAParser.IBrowser) => setDefaults(major)
export const getBrowserName = ({ name }: UAParser.IBrowser) => setDefaults(name)

// engine types
export const getEngineName = ({ name }: UAParser.IEngine) => setDefaults(name)
export const getEngineVersion = ({ version }: UAParser.IEngine) => setDefaults(version)

export const isElectronType = () => {
  const nav = getNavigatorInstance()
  const ua = nav && nav.userAgent && nav.userAgent.toLowerCase()
  return ua === 'string' ? /electron/.test(ua) : false
}

export const isEdgeChromiumType = (ua: string) => typeof ua === 'string' && ua.includes('Edg/')

export const getIPad13 = () => isIOS13Check('iPad')
export const getIphone13 = () => isIOS13Check('iPhone')
export const getIPod13 = () => isIOS13Check('iPod')

export const getIOS13 = () => {
  const nav = getNavigatorInstance()
  return (
    nav
    && (/iPad|iPhone|iPod/.test(nav.platform)
      || (nav.platform === 'MacIntel' && nav.maxTouchPoints > 1))
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    && !window.MSStream
  )
}
