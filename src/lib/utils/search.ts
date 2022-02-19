export function wildcardStrInStr(
  query: string,
  str: string,
  options?: { caseSensitive?: boolean },
): boolean {
  if (!options?.caseSensitive) query = query.toLowerCase()
  const re = new RegExp(query.split('').join('.*'))
  return re.test(str)
}

export function wildcardStrInObj(query: string, obj: any): boolean {
  for (const prop in obj) {
    if (typeof obj[prop] === 'string' && wildcardStrInStr(query, obj[prop])) {
      return true
    } else if (typeof obj[prop] === 'object') {
      if (wildcardStrInObj(query, obj[prop])) {
        return true
      }
    }
  }
  return false
}
