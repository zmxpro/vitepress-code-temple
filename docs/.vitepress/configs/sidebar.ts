import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/comfyui/': [
        {
            // 分组标题1
            text: '介绍',
            items: [
                { text: 'ComfyUI', link: '/comfyui/study1' },
                { text: 'ComfyUI', link: '/comfyui/study2' },
            ],
        }
    ]
}
