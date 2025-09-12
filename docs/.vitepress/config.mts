import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/pegd-docs/',
  title: "pegd-docs",
  description: "Documentacion oficial de la plataforma de estandarizacion y gestion documental CFE (PEGD-CFE)",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: 'deep',
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
      { text: 'Manual de usuario', link: '/manual-de-usuario/00-introduccion'},

    ],

    sidebar: [
      {
        text: 'Manual de usuario',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Introduccion', link: '/manual-de-usuario/00-introduccion' },
          { text: 'Creando tu Cuenta y Primer Inicio de Sesión', link: '/manual-de-usuario/01-registro-e-inicio-de-sesion' },
          { text: 'Explorando el panel', link: '/manual-de-usuario/02-explorando-el-panel' },
          { text: 'Como generar Hojas de calibracion', link: '/manual-de-usuario/03-generar-documentos'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/123KLUWU/pegd-docs.git' }
    ]
  }
})
