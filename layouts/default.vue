<template>
  <div class="bg-black text-white dark py-5">
    <div class="max-w-5xl mx-auto px-5">
      <header class="flex justify-between py-3 mb-5">
        <nuxt-link to="/" class="flex gap-x-3">
          <img src="/nj.svg" class="h-24">
          <div class="flex flex-col">
            <h1 class="text-3xl font-bold">N. J. ROMANO</h1>
            <p class="hidden md:block">Web Developer, Terminally Online</p>
          </div>
        </nuxt-link>
      </header>
      <main class="min-h-screen">
        <div class="flex flex-col md:flex-row gap-y-5 gap-x-5">
          <nav class="text-sm w-96 order-1 md:order-0">
            <h1 class="font-semibold tracking-wider text-xl">LINKS</h1>
            <ul>
              <nuxt-link class="cursor-pointer text-purple-500" tag="li" to="/about">About Me</nuxt-link>
              <li>
                <a class="cursor-pointer text-purple-500" href="https://github.com/njromano">GitHub</a>
              </li>
              <li>
                <a class="cursor-pointer text-purple-500" href="https://www.buymeacoffee.com/nromano" target="blank">Buy
                  me a coffee</a>
              </li>
            </ul>
            <hr class="my-5"/>
            <h1 class="font-semibold tracking-wider text-xl">CATEGORIES</h1>
            <ul>
              <nuxt-link class="cursor-pointer text-purple-500 capitalize"
                         v-for="category in categories" :key="category"
                         tag="li"
                         :to="`/blog/categories/${category}`">{{category}}</nuxt-link>
            </ul>
          </nav>
          <nuxt class="w-full order-0 md:order-1"/>
        </div>
      </main>
      <footer class="text-gray-400 py-5">
        &copy; {{ new Date().getFullYear() }} Nick Romano
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: []
    }
  },
  async created() {
    const articles = await this.$content('articles')
        .only(['category'])
        .sortBy('category', 'asc')
        .fetch();
    console.log(articles);
    const categories = articles.map(art => art.category);
    const uniqueCategories = new Set(categories);
    this.categories = [...uniqueCategories].sort()
  }
}
</script>