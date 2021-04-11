<template>
  <div class="bg-black text-white dark py-5">
    <div class="max-w-4xl mx-auto px-5">
      <header class="flex justify-between py-3 mb-5">
        <nuxt-link to="/" class="flex gap-x-3">
          <img src="/nj.svg" class="h-24">
          <div class="flex flex-col">
            <h1 class="text-3xl font-bold">N. J. ROMANO</h1>
            <p class="hidden md:block">Web Developer, Terminally Online</p>
          </div>
        </nuxt-link>
      </header>
      <main class="min-h-screen">
        <div class="flex flex-col md:flex-row gap-y-5 gap-x-5">
          <nav class="text-sm w-48">
            <h1 class="font-semibold tracking-wider text-xl">LINKS</h1>
            <ul>
              <nuxt-link class="cursor-pointer text-purple-500" tag="li" to="/about">About Me</nuxt-link>
              <li>
                <a class="cursor-pointer text-purple-500" href="https://github.com/njromano">GitHub</a>
              </li>
              <li>
                <a class="cursor-pointer text-purple-500" href="https://www.buymeacoffee.com/nromano" target="blank">Buy me a coffee</a>
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