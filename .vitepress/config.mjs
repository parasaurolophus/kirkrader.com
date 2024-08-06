import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
  title: "Kirk Rader",
  description: "Experiments",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/kirk.png',
    appearance: 'dark',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },

  markdown: {
    math: true,
  },

  // optionally, you can pass MermaidConfig
  // mermaid: {
  //    refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  // },

  // optionally set additional config for plugin itself with MermaidPluginConfig
  // mermaidPlugin: {
  //   class: "mermaid my-class", // set additional css classes for parent container 
  // },
})
