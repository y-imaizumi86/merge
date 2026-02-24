<template>
  <div class="grid grid-cols-4 gap-2 rounded-lg bg-board p-2">
    <GameTile
      v-for="(cell, index) in board"
      :key="index"
      :value="cell"
      class="aspect-square text-2xl"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const board = ref([
  2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 0, 2, 4,
])
</script>
