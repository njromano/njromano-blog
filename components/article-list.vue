<template>
  <div class="flex flex-col gap-y-5 ">
    <div v-for="article in articles">
      <small> {{ new Date(article.updatedAt).toDateString() }} - <span class="capitalize">{{article.category}}</span></small>
      <nuxt-link :to="`/blog/${article.slug}`" class="cursor-pointer">
        <h1 class="text-3xl font-bold">{{ article.title}}</h1>
        <small class="text-purple-500">☝ Click to read full article</small>
      </nuxt-link>
      <p class="prose dark prose-light max-w-none">{{ article.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "article-list",
  props: {
    articles: Array
  }
}
</script>

<style scoped>

</style>