<template>
  <div
    :class="['flex items-center justify-center rounded-md font-bold', tileClass, value ? 'animate-pop' : '']"
  >
    {{ value || '' }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  value: number
}>()

const tileClass = computed(() => {
  if (!props.value) {
    return 'bg-tile-empty'
  }

  const colorMap: Record<number, string> = {
    2: 'bg-tile-2 text-text-dark',
    4: 'bg-tile-4 text-text-dark',
    8: 'bg-tile-8 text-text-light',
    16: 'bg-tile-16 text-text-light',
    32: 'bg-tile-32 text-text-light',
    64: 'bg-tile-64 text-text-light',
    128: 'bg-tile-128 text-text-light',
    256: 'bg-tile-256 text-text-light',
    512: 'bg-tile-512 text-text-light',
    1024: 'bg-tile-1024 text-text-light text-xl',
    2048: 'bg-tile-2048 text-text-light text-xl',
    4096: 'bg-tile-4096 text-text-light text-xl',
    8192: 'bg-tile-8192 text-text-light text-lg',
  }

  return colorMap[props.value] ?? 'bg-tile-2048 text-text-light'
})
</script>
