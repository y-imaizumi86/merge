<template>
  <div
    v-if="show"
    class="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-black/50"
  >
    <p class="mb-4 text-3xl font-bold text-white">
      Game Over!
    </p>
    <button
      class="rounded-md bg-board px-6 py-2 font-bold text-white transition-opacity hover:opacity-80"
      @click="$emit('restart')"
    >
      Try Again
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean
}>()

defineEmits<{
  restart: []
}>()
</script>
