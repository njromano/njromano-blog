export default {
  target: "static",
  components: true,
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: ['@nuxt/content'],
  tailwindcss: {
    jit: true,
    darkMode: 'class',
  },
  head: {
    title: 'N.J. Romano, Web Developer',
    link: [
      {rel: 'icon', type: 'image/svg', href: '/nj.svg'}
    ]
  }
}