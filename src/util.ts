export const setDefaults = (p?: string, d = 'none') => (p || d)

export const getNavigatorInstance = () => {
  if (typeof window !== undefined) {
    if (window.navigator || navigator)
      return window.navigator || navigator
  }
  return false
}

export const isIOS13Check = (type: 'iPad' | 'iPhone' | 'iPod') => {
  const nav = getNavigatorInstance()
  return (
    nav
    && nav.platform
    && (nav.platform.includes(type)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
      || (nav.platform === 'MacIntel' && nav.maxTouchPoints > 1 && !window.MSStream))
  )
}
