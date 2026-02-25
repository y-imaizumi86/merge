<template>
  <div
    ref="appRef"
    class="flex min-h-screen items-center justify-center bg-neutral-100"
    @touchmove.prevent
  >
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
import { ref as vueRef } from 'vue'

const { score, isGameOver, initGame, move } = useGameBoard()

const appRef = vueRef<HTMLElement | null>(null)

const { direction: swipeDirection } = useSwipe(appRef, {
  onSwipeEnd: () => {
    const dirMap: Record<string, 'up' | 'down' | 'left' | 'right'> = {
      up: 'up',
      down: 'down',
      left: 'left',
      right: 'right',
    }
    const dir = dirMap[swipeDirection.value]
    if (dir) move(dir)
  },
})

useHead({
  title: 'MERGE',
  meta: [
    {
      name: 'description',
      content: 'Vue 3 + Nuxt で作った2048パズルゲーム。キーボードとスワイプで操作できます。',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: 'MERGE',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
    },
  ],
  link: [
    {
      rel: 'apple-touch-icon',
      href: '/icon-192x192.png',
    },
  ],
})
</script>
