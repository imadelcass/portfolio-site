<template></template>

<script setup>
import { onMounted } from 'vue'

var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date()

const tawk = () => {
  var s1 = document.createElement('script'),
    s0 = document.getElementsByTagName('script')[0]
  s1.async = true
  s1.src = 'https://embed.tawk.to/684ab58533b91e191b55393f/1ithta4so'
  s1.charset = 'UTF-8'
  s1.setAttribute('crossorigin', '*')
  s0.parentNode.insertBefore(s1, s0)
}

onMounted(() => tawk())
</script>
