<template>
  <div class="grid grid-cols-4 gap-2 rounded-lg bg-board p-2">
    <GameTile
      v-for="(cell, index) in cells"
      :key="index"
      :value="cell"
      class="aspect-square text-2xl"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref as vueRef } from 'vue'
import { useSwipe } from '@vueuse/core'

const { cells, move } = useGameBoard()

const handleKeydown = (e: KeyboardEvent) => {
  const keyMap: Record<string, 'up' | 'down' | 'left' | 'right'> = {
    ArrowUp: 'up',
    ArrowDown: 'down',
    ArrowLeft: 'left',
    ArrowRight: 'right',
  }

  const direction = keyMap[e.key]
  if (direction) {
    e.preventDefault()
    move(direction)
  }
}

const boardRef = vueRef<HTMLElement | null>(null)

const { direction: swipeDirection } = useSwipe(boardRef, {
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

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>
