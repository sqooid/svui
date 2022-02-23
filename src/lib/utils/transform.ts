export function toKebabCase(str: string): string {
  const re = /(?=[A-Z0-9])/
  const splits = str.split(re)
  const lower = splits.map((str) => str.toLowerCase())
  return lower.join('-')
}

export function objToCssVars(obj: any): string {
  let str = ''
  for (const prop in obj) {
    str += `--svui-${toKebabCase(prop)}: ${obj[prop]};`
  }
  return str
}

/**
 * Deeply applies properties in source object to target object
 * @param target
 * @param source
 * @returns
 */
export function deepAssign<T>(target: T, source: Partial<T>): T {
  for (const prop in source) {
    if (typeof source[prop] === 'object' && typeof target[prop] === 'object') {
      deepAssign(target[prop], source[prop])
    } else {
      target[prop] = source[prop]
    }
  }
  return target
}
