<template>
  <div>
    <h1 class="text-3xl font-bold uppercase">{{slug}}</h1>
    <hr class="my-3"/>
    <article-list :articles="articles"/>
  </div>
</template>

<script>
import ArticleList from "../../../components/article-list";
export default {
  name: "category-posts",
  components: {ArticleList},
  async asyncData({params, $content}) {
    const slug = params.slug;
    const articles = await $content('articles')
    .where({category: slug})
    .fetch();
    return { slug, articles };
  }
}
</script>

<style scoped>

</style>