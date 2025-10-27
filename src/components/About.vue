<template>
  <section class="lg:grid lg:place-content-center py-12 sm:py-16">
    <h2 id="subjudul" class="animate-bounce animate-infinite flex justify-center text-2xl font-semibold text-gray-900 sm:text-3xl">ABOUT</h2>
    <div class="flex justify-center mx-auto w-screen max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-12">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
        <div>
          <div class="animate__fadeInDownBig max-w-prose md:max-w-none">
            <h2 class="text-blue-800 sm:text-3xl italic justify-center" id="about-text">"Jangan hanya menjadi pengguna teknologi, jadilah penciptanya. Siap untuk menulis baris kode pertama menuju karier impian Anda?"</h2>
          </div>
        </div>

        <div class="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden md:max-w-2xl">
          <div class="relative overflow-hidden">
            <img :src="imageUrl" alt="Deskripsi Gambar" class="w-full object-cover transition-transform duration-500 ease-in-out hover:scale-128 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-4 sm:px-6 lg:px-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div class="bg-blue-500 rounded-xl shadow-2xl p-6 text-white transition-transform duration-300 hover:scale-[1.05] transform">
          <div class="flex items-center justify-between">
            <p class="text-5xl font-extrabold tracking-tight">12</p>
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e3e3e3">
              <path
                d="M428-80v-220H300l102-328q8-25 30-38.5t48-13.5q26 0 48 13.5t30 38.5l102 328H532v220H428Zm52.08-654q-30.08 0-51.58-21.42t-21.5-51.5q0-30.08 21.42-51.58t51.5-21.5q30.08 0 51.58 21.42t21.5 51.5q0 30.08-21.42 51.58t-51.5 21.5Z"
              />
            </svg>
          </div>
          <p class="mt-2 text-lg font-medium opacity-100">Total Mahasiswi</p>
          <p class="mt-4 pt-2 border-t border-white border-opacity-30 text-xs opacity-80 italic">Mahasiswi IF-A</p>
        </div>

        <div class="bg-indigo-700 rounded-xl shadow-2xl p-6 text-white transition-transform duration-300 hover:scale-[1.05] transform">
          <div class="flex items-center justify-between">
            <p class="text-5xl font-extrabold tracking-tight">30</p>
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e3e3e3">
              <path
                d="M234-336q-29.29 0-50.14-21.21-20.86-21.21-20.86-51T183.86-459q20.85-21 50.14-21 30.11 0 51.56 21.21 21.44 21.21 21.44 51T285.56-357q-21.45 21-51.56 21Zm491 0q-30.11 0-51.56-21.21-21.44-21.21-21.44-51T673.44-459q21.45-21 51.56-21 29.29 0 50.14 21.21 20.86 21.21 20.86 51T775.14-357q-20.85 21-50.14 21Zm-245-42q-38 0-65-27t-27-65q0-38 27-65t65-27q38 0 65 27t27 65q0 38-27 65t-65 27ZM288-121q14-66 67.3-110.5T480-276q71.4 0 124.7 44.5T672-121H288Zm-208 0q0-65 45.24-110T234-276q23 0 44.5 6t39.5 18q-27 25.93-45 59.47Q255-159 248-121H80Zm632 0q-7-38-25-71.53-18-33.54-45-59.47 18-11 39-17.5t44-6.5q63.94 0 109.47 45T880-121H712ZM76-500l-36-47 440-333 177 134v-96h102v173.41L920-547l-36 47-404-304L76-500Z"
              />
            </svg>
          </div>
          <p class="mt-2 text-lg font-medium opacity-100">Total Keseluruhan</p>
          <p class="mt-4 pt-2 border-t border-white border-opacity-30 text-xs opacity-80 italic">Mahasiswa & Mahasiswi</p>
        </div>

        <div class="bg-blue-900 rounded-xl shadow-2xl p-6 text-white transition-transform duration-300 hover:scale-[1.05] transform">
          <div class="flex items-center justify-between">
            <p class="text-5xl font-extrabold tracking-tight">18</p>
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e3e3e3">
              <path
                d="M420-80v-280h-80v-253q0-24.75 17.63-42.38Q375.25-673 400-673h160q24.75 0 42.38 17.62Q620-637.75 620-613v253h-80v280H420Zm60.08-654q-30.08 0-51.58-21.42t-21.5-51.5q0-30.08 21.42-51.58t51.5-21.5q30.08 0 51.58 21.42t21.5 51.5q0 30.08-21.42 51.58t-51.5 21.5Z"
              />
            </svg>
          </div>
          <p class="mt-2 text-lg font-medium opacity-100">Total Mahasiswa</p>
          <p class="mt-4 pt-2 border-t border-white border-opacity-30 text-xs opacity-80 italic">Mahasiswa IF-A</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import aboutImage from "@/assets/About.jpg";

export default {
  name: "ImageZoomHover",
  data() {
    return {
      imageUrl: aboutImage,
    };
  },
};
</script>
