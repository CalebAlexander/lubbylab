<template>
    <!-- Header -->
    <header class="bg-paletteYellowDark">
      <nav class="shadow-xl">
        <div class="container mx-auto py-2 flex justify-between items-center">

          <g-link class="font-bold text-2xl lg:text-4xl" to="/">{{ $static.metadata.siteName }}</g-link>
          <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <!-- <title>Menu</title> -->
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div class="hidden lg:block">
            <ul class="inline-flex">
              <li><g-link to="/" class="px-4 font-bold">Home</g-link></li>
              <li><g-link to="/projects/" class="px-4 hover:text-gray-800">Projects</g-link></li>
              <li><g-link to="/hobbies/" class="px-4 hover:text-gray-800">Hobbies</g-link></li>
              <li><g-link to="/about/" class="px-4 hover:text-gray-800">About</g-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>