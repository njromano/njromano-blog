<template>
  <div class="bg-gray-900 text-gray-200 dark">
    <div class="max-w-3xl mx-auto px-5">
      <header class="flex justify-between py-3 mb-5 text-lg">
        <nuxt-link to="/" class="flex gap-x-3">
          <h1 class="font-bold font-3xl">Nick Romano</h1>
          <p class="hidden md:block">Web Developer, Terminally Online</p>
        </nuxt-link>
        <nav class="flex font-semibold gap-x-3">
          <nuxt-link to="about">About</nuxt-link>
          <nuxt-link to="contact">Contact</nuxt-link>
          <nuxt-link to="projects">Projects</nuxt-link>
        </nav>
      </header>
      <main class="min-h-screen">
        <nuxt/>
      </main>
      <footer class="text-gray-400 py-5">
        &copy; {{new Date().getFullYear()}} Nick Romano
      </footer>
    </div>
  </div>
</template>