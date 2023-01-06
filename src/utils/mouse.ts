import { ref } from 'vue'
import { useEvent } from './event'
export function useMouse() {
  const x = ref<number>(0)
  const y = ref<number>(0)

  const update = (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  }
  useEvent(window, 'mousemove', update)
  return { x, y }
}
