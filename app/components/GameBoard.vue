<template>
  <div
    ref="boardRef"
    class="grid grid-cols-4 gap-2 rounded-lg bg-board p-2"
    @touchmove.prevent
  >
    <GameTile
      v-for="(cell, index) in cells"
      :key="cellKeys[index]"
      :value="cell"
      class="aspect-square text-2xl"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

const { cells, cellKeys, move } = useGameBoard()

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

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>
