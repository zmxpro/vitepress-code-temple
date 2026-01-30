import type { DefaultTheme } from 'vitepress'
import { devDependencies } from '../../../package.json'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: '/' },
  {
    text: '🍉ComfyUI',
    items: [
      {
        // 分组标题1
        text: '介绍',
        items: [
          { text: 'ComfyUI', link: '/comfyui/study1' },
          { text: 'ComfyUI', link: '/comfyui/study2' },
        ],
      }
    ],
  },
  // { text: `VitePress ${devDependencies.vitepress.replace('^', '')}`, link: 'https://vitepress.dev/zh/', noIcon: true },
  // { text: '更新日志', link: '/' },
]