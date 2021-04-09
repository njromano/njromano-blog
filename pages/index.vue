<template>
  <div class="flex flex-col gap-y-5 w-full">
    <div v-for="article in articles">
      <small> {{ new Date(article.updatedAt).toDateString() }} </small>
      <nuxt-link :to="`/blog/${article.slug}`" class="text-3xl font-bold cursor-pointer" tag="h1">{{
          article.title
        }}
      </nuxt-link>
      <small>☝ Click to read full article</small>
      <p class="prose dark prose-light max-w-none">{{ article.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({$content, params}) {
    const articles = await $content('articles')
        .only(['title', 'description', 'img', 'slug', 'author', 'updatedAt'])
        .sortBy('createdAt', 'desc')
        .fetch();

    const recentPost = (await $content('articles')
        .sortBy('createdAt', 'desc')
        .limit(1)
        .fetch())[0];

    return {
      articles,
      recentPost
    }
  },
}
</script>
