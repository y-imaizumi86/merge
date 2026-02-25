<template>
  <div class="flex min-h-screen items-center justify-center bg-neutral-100">
    <div class="w-full max-w-md p-4">
      <h1 class="mb-4 text-center text-4xl font-bold text-text-dark">
        2048
      </h1>
      <ClientOnly>
        <GameBoard />
        <template #fallback>
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
