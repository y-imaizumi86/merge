<template>
  <div
    v-if="show || hasWon"
    class="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-black/50"
  >
    <template v-if="hasWon">
      <p class="mb-2 text-3xl font-bold text-yellow-300">
        🎉 You Win!
      </p>
      <p class="mb-4 text-lg text-white/80">
        Score: {{ score }}
      </p>
      <div class="flex gap-3">
        <button
          class="rounded-md bg-board px-6 py-2 font-bold text-white transition-opacity hover:opacity-80"
          @click="$emit('continue')"
        >
          Keep Playing
        </button>
        <button
          class="rounded-md bg-board px-6 py-2 font-bold text-white transition-opacity hover:opacity-80"
          @click="$emit('restart')"
        >
          New Game
        </button>
      </div>
    </template>
    <template v-else>
      <p class="mb-2 text-3xl font-bold text-white">
        Game Over!
      </p>
      <p class="mb-4 text-lg text-white/80">
        Score: {{ score }}
      </p>
      <button
        class="rounded-md bg-board px-6 py-2 font-bold text-white transition-opacity hover:opacity-80"
        @click="$emit('restart')"
      >
        Try Again
      </button>
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean
  hasWon: boolean
  score: number
}>()

defineEmits<{
  restart: []
  continue: []
}>()
</script>
