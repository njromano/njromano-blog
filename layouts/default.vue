<template>
  <div class="bg-gray-900 text-gray-200 dark">
    <div class="max-w-3xl mx-auto px-5">
      <header class="flex justify-between py-3 mb-5 text-lg">
        <nuxt-link to="/" class="flex gap-x-3">
          <h1 class="font-bold font-3xl">Nick Romano</h1>
          <p class="hidden md:block">Web Developer, Terminally Online</p>
        </nuxt-link>
      </header>
      <main class="min-h-screen">
        <div class="flex gap-x-5">
          <nav class="text-sm w-48">
            <h1 class="font-bold">RESOURCES</h1>
            <ul>
              <nuxt-link class="font-semibold cursor-pointer" tag="li" to="/about">About Me</nuxt-link>
              <li>
                <a class="font-semibold" href="https://github.com/njromano">GitHub</a>
              </li>
            </ul>
          </nav>
            <nuxt class="w-full"/>
        </div>
      </main>
      <footer class="text-gray-400 py-5">
        &copy; {{new Date().getFullYear()}} Nick Romano
      </footer>
    </div>
  </div>
</template>