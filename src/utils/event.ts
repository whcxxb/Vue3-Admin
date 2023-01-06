import { onMounted, onUnmounted } from 'vue'

export function useEvent(target: Window, event: string, callback: any) {
  onMounted(() => {
    target.addEventListener(event, callback)
  })
  onUnmounted(() => {
    target.removeEventListener(event, callback)
  })
}
