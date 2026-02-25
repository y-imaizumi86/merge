<template>
  <div class="mb-4 flex items-center justify-between">
    <h1 class="text-4xl font-bold text-text-dark">
      2048
    </h1>
    <div class="flex items-center gap-3">
      <div class="rounded-md bg-board px-4 py-2 text-center">
        <div class="text-xs uppercase text-tile-empty">
          Score
        </div>
        <div class="text-lg font-bold text-white">
          {{ score }}
        </div>
      </div>
      <button
        class="rounded-md bg-board px-4 py-2 text-sm font-bold uppercase text-white transition-opacity hover:opacity-80"
        @click="$emit('restart')"
      >
        New
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  score: number
}>()

defineEmits<{
  restart: []
}>()
</script>
