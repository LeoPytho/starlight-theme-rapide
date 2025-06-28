import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeRapide from 'starlight-theme-rapide'

export default defineConfig({
  integrations: [
    starlight({
      credits: false,
      editLink: {
        baseUrl: 'https://github.com/HiDeoo/starlight-theme-rapide/edit/main/docs/',
      },
      plugins: [starlightThemeRapide()],
      sidebar: [
        {
          label: 'Start Here',
          items: ['getting-started', 'customization'],
        },
        {
          label: 'Resources',
          items: [{ label: 'Plugins and Tools', link: '/resources/starlight/' }],
        },
        {
          label: 'Examples',
          autogenerate: { directory: 'examples' },
        },
      ],
      social: [
        { href: 'https://whatsapp.com/channel/0029Vb3D8q00Qeabko4izt2N', icon: 'whatsapp', label: 'WhatsApp' },
        { href: 'https://github.com/j-forces', icon: 'github', label: 'GitHub' },
      ],
      title: 'JKT48Connect Docs',
    }),
  ],
  site: 'https://docs.jkt48connect.my.id',
})
