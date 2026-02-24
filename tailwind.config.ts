import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        // 盤面の背景色
        'board': '#bbada0',
        // タイルがない場所の色
        'tile-empty': '#cdc1b4',

        // 各数字のタイルの色
        'tile-2': '#eee4da',
        'tile-4': '#ede0c8',
        'tile-8': '#f2b179',
        'tile-16': '#f59563',
        'tile-32': '#f67c5f',
        'tile-64': '#f65e3b',
        'tile-128': '#edcf72',
        'tile-256': '#edcc61',
        'tile-512': '#edc850',
        'tile-1024': '#edc53f',
        'tile-2048': '#edc22e',

        // 文字色
        'text-dark': '#776e65', // 2, 4 など明るい背景用
        'text-light': '#f9f6f2', // 8以上など暗い背景用
      },
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
      },
      keyframes: {
        // 出現・合体時のポップアニメーション
        pop: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        pop: 'pop 200ms ease-in-out',
      },
    },
  },
}
