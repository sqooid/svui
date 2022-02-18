/**
 * Use to dispatch and handle synthetic custom events that bubble
 */
export class NativeEvent<T> {
  /**
   * Dispatch a custom event
   * @param node HTML node where event should begin
   * @param name Name (type) of event
   * @param args Object containing info to be passed with event
   * @returns
   */
  dispatch(node: HTMLElement, name: keyof T, args?: T[keyof T]) {
    if (typeof name !== 'string') return
    const event = new CustomEvent(name, {
      detail: args,
      bubbles: true,
      composed: true,
    })
    node.dispatchEvent(event)
  }

  /**
   * Handles a custom event
   * @param node HTML node where event should be caught
   * @param name Name (type) of event
   * @param callback Callback that is called when event is handled
   * @returns
   */
  handle(
    node: HTMLElement,
    name: keyof T,
    callback: (args?: T[keyof T]) => void,
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
