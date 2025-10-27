<template>
  <div class="flex flex-col items-center justify-center p-4 pt-10 md:flex-row md:gap-10 md:pt-40">
    <img alt="IF" src="../../public/if.png" class="w-40 h-auto rounded object-cover mb-6 md:w-72 md:mb-0" />

    <div class="flex flex-col items-center md:items-start text-center md:text-left animate-bounce animate-infinite">
      <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-gray-900 leading-tight font-extrabold" id="header">INFORMATIKA-A</h1>

      <p class="text-lg sm:text-xl md:text-3xl lg:text-4xl text-gray-700 mt-2" id="header">SEKOLAH TINGGI TEKNOLOGI CIPASUNG</p>
    </div>
  </div>

  <div class="flex justify-center mt-8 md:mt-16">
    <router-link to="/home" class="group inline-block rounded-full bg-gradient-to-r from-blue-300 via-blue-500 to-blue-800 p-[2px] hover:text-white focus:ring-3 focus:outline-hidden">
      <span class="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent"> Click Here </span>
    </router-link>
  </div>
</template>
