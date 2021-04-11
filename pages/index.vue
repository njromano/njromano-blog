<template>
  <div class="flex flex-col w-full">
    <article-list :articles="articles"/>
  </div>
</template>

<script>
import ArticleList from "../components/article-list";
export default {
  components: {ArticleList},
  async asyncData({$content, params}) {
    const articles = await $content('articles')
        .only(['title', 'description', 'img', 'slug', 'author', 'updatedAt', 'category'])
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
