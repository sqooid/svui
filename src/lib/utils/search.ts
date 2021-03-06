export function wildcardStrInStr(
  query: string,
  str: string,
  options?: { caseSensitive?: boolean },
): boolean {
  const re = new RegExp(
    query.split('').join('.*'),
    options?.caseSensitive ? '' : 'i',
  )
  return re.test(str)
}

export function wildcardStrInObj(
  query: string,
  obj: any,
  options?: { ignore?: string[] },
): boolean {
  for (const prop in obj) {
    if (!!options?.ignore && options.ignore.indexOf(prop) !== -1) continue
    if (typeof obj[prop] === 'string' && wildcardStrInStr(query, obj[prop])) {
      return true
    } else if (typeof obj[prop] === 'object') {
      if (wildcardStrInObj(query, obj[prop], options)) {
        return true
      }
    }
  }
  return false
}
