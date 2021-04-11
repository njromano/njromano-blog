<template>
  <article class="prose dark:prose-light max-w-none">
    <small> {{ new Date(article.createdAt).toDateString() }} - <span class="capitalize">{{article.category}}</span></small>
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article"></nuxt-content>
  </article>
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