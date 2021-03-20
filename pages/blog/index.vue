<template>
  <div>
    <h1>Blog posts</h1>
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <nuxt-link :to="{name: 'blog-slug', params: { slug: article.slug}}">
          <img :src="article.img"/>
          <div>
            <h2>{{article.title}}</h2>
            <time>{{article.lastUpdated}}</time>
            <p>{{article.description}}</p>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  async asyncData({$content, params}) {
    const articles = await $content('articles')
        .only(['title', 'description', 'img', 'slug', 'author', 'lastUpdated'])
        .sortBy('createdAt', 'asc')
        .fetch();

    return {
      articles
    }
  }
}
</script>

<style scoped>

</style>