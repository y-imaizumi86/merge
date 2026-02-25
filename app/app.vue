<template>
  <div class="flex min-h-screen items-center justify-center bg-neutral-100">
    <div class="w-full max-w-md p-4">
      <ClientOnly>
        <GameHeader
          :score="score"
          @restart="initGame"
        />
        <div class="relative">
          <GameBoard />
          <GameOverlay
            :show="isGameOver"
            @restart="initGame"
          />
        </div>
        <template #fallback>
          <div class="mb-4 flex items-center justify-between">
            <h1 class="text-4xl font-bold text-text-dark">
              2048
            </h1>
          </div>
          <div class="grid grid-cols-4 gap-2 rounded-lg bg-board p-2">
            <div
              v-for="i in 16"
              :key="i"
              class="aspect-square rounded-md bg-tile-empty"
            >
            </div>
          </div>
        </template>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
const { score, isGameOver, initGame } = useGameBoard()
</script>
