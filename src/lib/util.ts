export function stylesStringFromObject(obj: any): string {
  return Object.entries(obj)
    .map((style) => `${style[0]}:${style[1]}`)
    .join(';')
}
