import type { IResult } from 'ua-parser-js'
import UAParser from 'ua-parser-js'

export const ClientUAInstance = new UAParser()

export const browser = ClientUAInstance.getBrowser()
export const cpu = ClientUAInstance.getCPU()
export const device = ClientUAInstance.getDevice()
export const engine = ClientUAInstance.getEngine()
export const os = ClientUAInstance.getOS()
export const ua = ClientUAInstance.getUA()
export const setUa = (userAgentString: string) => ClientUAInstance.setUA(userAgentString)

export function parseUA(userAgent: string): IResult {
  const ua = new UAParser(userAgent)
  return {
    browser: ua.getBrowser(),
    cpu: ua.getCPU(),
    device: ua.getDevice(),
    engine: ua.getEngine(),
    os: ua.getOS(),
    ua: ua.getUA(),
  }
}
