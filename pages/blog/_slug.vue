<template>
  <div class="mx-auto">
    <div class="text-gray-200 w-full text-sm hidden md:block w-1/3">
      <p class="text-lg font-medium">{{article.title}}</p>
      <p class="text-gray-300">{{article.description}}</p>
      <p class="text-gray-300">Updated <time>{{ formatDate(article.updatedAt) }}</time></p>
    </div>
    <article class="prose dark:prose-light max-w-none">
      <details class="my-5">
        <summary>Contents</summary>
        <ul>
          <li v-for="link of article.toc" :key="link.id">
            <nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
          </li>
        </ul>
      </details>

      <nuxt-content :document="article"></nuxt-content>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({$content, params}) {
    const article = await $content('articles', params.slug).fetch();
    return {article};
  },
  methods: {
    formatDate(date) {
      const options = {year: 'numeric', month: 'long', day: 'numeric'};
      return new Date(date).toLocaleString('en', options);
    }
  }
}
</script>

<style>

</style>