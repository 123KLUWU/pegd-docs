import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "pegd-docs",
  description: "Documentacion oficial de la plataforma de estandarizacion y gestion documental CFE (PEGD-CFE)",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: 'deep',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Inicio de sesion', link: '/usuario/01-registro-e-inicio-de-sesion'},
      { text: 'Explorando el panel', link: '/usuario/02-explorando-el-panel'},
      { text: 'Como generar Hojas de calibracion', link: '/usuario/03-generar-documentos'},
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'introduccion', link: '/usuario/introduccion' },
          { text: 'Creando tu Cuenta y Primer Inicio de Sesión', link: '/usuario/01-registro-e-inicio-de-sesion' },
          { text: 'Explorando el panel', link: '/usuario/02-explorando-el-panel' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
