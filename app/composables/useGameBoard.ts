const GRID_SIZE = 4
const CELL_COUNT = GRID_SIZE ** 2

export const useGameBoard = () => {
  const cells = ref<number[]>(Array(CELL_COUNT).fill(0))
  const score = ref(0)
  const isGameOver = ref(false)

  const emptyCells = computed(() =>
    cells.value.map((value, index) => (value === 0 ? index : -1))
      .filter(value => value !== -1),
  )

  const addRandomTile = () => {
    const available = emptyCells.value
    if (available.length === 0) return

    const randomIndex = available[Math.floor(Math.random() * available.length)]
    if (randomIndex === undefined) return
    cells.value[randomIndex] = Math.random() < 0.9 ? 2 : 4
  }

  const slideRow = (row: number[]): number[] => {
    const filtered = row.filter(value => value !== 0)

    const merged: number[] = []
    let i = 0
    while (i < filtered.length) {
      const current = filtered[i]
      const next = filtered[i + 1]

      if (current === undefined) break

      if (next !== undefined && current === next) {
        const newValue = current * 2
        merged.push(newValue)
        score.value += newValue
        i += 2
      }
      else {
        merged.push(current)
        i += 1
      }
    }

    while (merged.length < GRID_SIZE) {
      merged.push(0)
    }

    return merged
  }

  const move = (direction: 'up' | 'down' | 'left' | 'right') => {
    const prev = JSON.stringify(cells.value)

    for (let i = 0; i < GRID_SIZE; i++) {
      let row: number[] = []

      if (direction === 'left') {
        row = cells.value.slice(i * GRID_SIZE, (i + 1) * GRID_SIZE)
      }
      else if (direction === 'right') {
        row = cells.value.slice(i * GRID_SIZE, (i + 1) * GRID_SIZE).reverse()
      }
      else if (direction === 'up') {
        row = [0, 1, 2, 3].map(j => cells.value[j * GRID_SIZE + i] ?? 0)
      }
      else {
        row = [0, 1, 2, 3].map(j => cells.value[j * GRID_SIZE + i] ?? 0).reverse()
      }

      const result = slideRow(row)

      if (direction === 'left') {
        for (let j = 0; j < GRID_SIZE; j++) {
          cells.value[i * GRID_SIZE + j] = result[j] ?? 0
        }
      }
      else if (direction === 'right') {
        const reversed = result.reverse()
        for (let j = 0; j < GRID_SIZE; j++) {
          cells.value[i * GRID_SIZE + j] = reversed[j] ?? 0
        }
      }
      else if (direction === 'up') {
        for (let j = 0; j < GRID_SIZE; j++) {
          cells.value[j * GRID_SIZE + i] = result[j] ?? 0
        }
      }
      else {
        const reversed = result.reverse()
        for (let j = 0; j < GRID_SIZE; j++) {
          cells.value[j * GRID_SIZE + i] = reversed[j] ?? 0
        }
      }
    }

    if (JSON.stringify(cells.value) !== prev) {
      addRandomTile()
      checkGameOver()
    }
  }

  const checkGameOver = () => {
    if (emptyCells.value.length > 0) return

    for (let i = 0; i < CELL_COUNT; i++) {
      const val = cells.value[i]
      if (val === undefined) continue
      if (i % GRID_SIZE < GRID_SIZE - 1 && val === cells.value[i + 1]) return
      if (i + GRID_SIZE < CELL_COUNT && val === cells.value[i + GRID_SIZE]) return
    }

    isGameOver.value = true
  }

  const initGame = () => {
    cells.value = Array(CELL_COUNT).fill(0)
    score.value = 0
    isGameOver.value = false
    addRandomTile()
    addRandomTile()
  }

  if (import.meta.client) {
    initGame()
  }

  return {
    cells,
    score,
    isGameOver,
    initGame,
    move,
  }
}
