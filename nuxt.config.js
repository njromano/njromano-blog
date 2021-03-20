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
    title: 'Nick Romano, Web Developer'
  }
}