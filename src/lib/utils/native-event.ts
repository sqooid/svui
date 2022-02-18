export class NativeEvent<T> {
  dispatch(node: HTMLElement, name: keyof T, args: T[keyof T]) {
    if (typeof name !== 'string') return
    const event = new CustomEvent(name, {
      detail: args,
      bubbles: true,
      composed: true,
    })
    node.dispatchEvent(event)
  }

  handle(
    node: HTMLElement,
    name: keyof T,
    callback: (args: T[keyof T]) => void,
  ) {
    if (typeof name !== 'string') return
    node.addEventListener(name, (e: CustomEvent) => {
      callback(e.detail)
    })
  }
}

type NativeEventsMap = {
  navclick: { x: number; y: number }
}
export const SvuiEvent = new NativeEvent<NativeEventsMap>()
