export function stylesStringFromObject(obj: any): string {
  return Object.entries(obj)
    .map((style) => `${style[0]}:${style[1]}`)
    .join(';')
}

interface ClickEvent {
  offsetX: number
  offsetY: number
  target: HTMLElement
}

interface RippleOptions {
  opacity?: number
  duration?: number
}
export function createRipple(e: ClickEvent, options?: RippleOptions) {
  const currOpacity = Number(window.getComputedStyle(e.target).opacity)
  const opacity = (options?.opacity ?? 0.2) * currOpacity
  const duration = options?.duration ?? 500

  const elem = e.target
  const rect = elem.getBoundingClientRect()
  const x = e.offsetX
  const y = e.offsetY
  const width = rect.width
  const height = rect.height
  const radius = Math.max(width, height)
  const ripple = document.createElement('div')
  ripple.style.left = x - radius + 'px'
  ripple.style.top = y - radius + 'px'
  ripple.style.width = radius * 2 + 'px'
  ripple.style.height = radius * 2 + 'px'
  ripple.classList.add('ripple-overlay')
  e.target.appendChild(ripple)
  ripple.animate(
    [
      { transform: 'scale(0)', opacity },
      { transform: 'scale(1)', opacity: 0 },
    ],
    duration,
  )

  setTimeout(() => {
    e.target.removeChild(ripple)
  }, duration)
}
