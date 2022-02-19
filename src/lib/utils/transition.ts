import type { TransitionConfig } from 'svelte/types/runtime/transition'
import { cubicOut } from 'svelte/easing'

type Origin = 'center' | 'top' | 'right' | 'bottom' | 'left'
export function expand(
  node,
  { duration = 200, delay = 0, origin = 'center', easing = cubicOut },
): TransitionConfig {
  const oldTransform = getComputedStyle(node).transform.replace('none', '')
  const scaleX = ['center', 'right', 'left'].indexOf(origin) !== -1
  const scaleY = ['center', 'top', 'bottom'].indexOf(origin) !== -1
  return {
    duration,
    delay,
    easing,
    css: (t) =>
      `transform:${oldTransform} scale(${scaleX ? t : 1}, ${
        scaleY ? t : 1
      }); transform-origin:${origin}; opacity:${t}`,
  }
}
