import { onMounted } from 'vue'

// Live-chat widget. Loaded lazily on mount so it never blocks first paint.
const WIDGET_SRC = 'https://embed.tawk.to/684ab58533b91e191b55393f/1ithta4so'

export function useTawkTo() {
  onMounted(() => {
    if (document.querySelector(`script[src="${WIDGET_SRC}"]`)) return

    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_LoadStart = new Date()

    const script = document.createElement('script')
    script.async = true
    script.src = WIDGET_SRC
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')
    document.head.appendChild(script)
  })
}
