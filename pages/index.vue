<template>
  <div>
    <p class="text-2xl mb-5">Hello! 👋 I make things on the web.</p>
    <h1 class="font-medium uppercase mb-1 px-3">Posts</h1>
    <ul>
      <li v-for="article of articles" :key="article.slug"
          class="">
        <nuxt-link :to="{name: 'blog-slug', params: { slug: article.slug}}"
                   class="block hover:bg-gray-800 rounded p-3 mb-3">
          <img :src="article.img"/>
          <div>
            <time class="text-gray-300 text-sm">{{ new Date(article.updatedAt).toLocaleDateString() }}</time>
            <h2 class="font-medium text-lg">{{ article.title }}</h2>
            <p class="text-gray-300">{{ article.description }}</p>
          </div>
          <hr class="border-gray-700 my-3"/>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({$content, params}) {
    const articles = await $content('articles')
        .only(['title', 'description', 'img', 'slug', 'author', 'updatedAt'])
        .sortBy('createdAt', 'desc')
        .fetch();

    return {
      articles
    }
  }
}
</script>
