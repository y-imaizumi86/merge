<template>
  <div class="mb-4 flex items-center justify-between">
    <h1 class="text-4xl font-bold text-text-dark dark:text-white">
      MERGE
    </h1>
    <div class="flex items-center gap-3">
      <div class="min-w-16 rounded-md bg-board px-3 py-2 text-center">
        <div class="text-xs uppercase text-tile-empty">
          Score
        </div>
        <div class="text-base font-bold text-white">
          {{ score }}
        </div>
      </div>
      <div class="min-w-16 rounded-md bg-board px-3 py-2 text-center">
        <div class="text-xs uppercase text-tile-empty">
          Best
        </div>
        <div class="text-base font-bold text-white">
          {{ bestScore }}
        </div>
      </div>
      <div class="flex flex-col gap-y-2">
        <button
          class="rounded-md bg-board px-4 py-2 text-sm font-bold uppercase text-white transition-opacity hover:opacity-80"
          @click="$emit('restart')"
        >
          New
        </button>
        <button
          class="rounded-md bg-board px-4 py-2 text-sm font-bold text-white transition-opacity hover:opacity-80"
          @click="$emit('toggle-dark')"
        >
          🌙
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  score: number
  bestScore: number
}>()

defineEmits<{
  'restart': []
  'toggle-dark': []
}>()
</script>
