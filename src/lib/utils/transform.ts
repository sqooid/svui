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
