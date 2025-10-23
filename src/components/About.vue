<template>
  <section class="lg:grid lg:place-content-center py-12 sm:py-16">
    <h2 id="subjudul" class="animate-bounce animate-infinite flex justify-center text-2xl font-semibold text-gray-900 sm:text-3xl">ABOUT</h2>
    <div class="flex justify-center mx-auto w-screen max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-12">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
        <div>
          <div class="animate__fadeInDownBig max-w-prose md:max-w-none">
            <h2 class="text-blue-800 sm:text-3xl italic" id="about-text">"Jangan hanya menjadi pengguna teknologi, jadilah penciptanya. Siap untuk menulis baris kode pertama menuju karier impian Anda?"</h2>
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
            <svg class="w-12 h-12 opacity-80" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-3.13 0-6 1.63-6 4v3h12v-3c0-2.37-2.87-4-6-4z"></path>
            </svg>
          </div>
          <p class="mt-2 text-lg font-medium opacity-100">Total Mahasiswi</p>
          <p class="mt-4 pt-2 border-t border-white border-opacity-30 text-xs opacity-80 italic">Angkatan Aktif</p>
        </div>

        <div class="bg-indigo-700 rounded-xl shadow-2xl p-6 text-white transition-transform duration-300 hover:scale-[1.05] transform">
          <div class="flex items-center justify-between">
            <p class="text-5xl font-extrabold tracking-tight">30</p>
            <svg class="w-12 h-12 opacity-80" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.07.6.38 1.17.84 1.58 1.37H20v-2.5c0-2.33-4.67-3.5-7-3.5-.71 0-1.37.08-2 .24.78.89 1.25 1.94 1.25 3.11z"
              ></path>
            </svg>
          </div>
          <p class="mt-2 text-lg font-medium opacity-100">Total Keseluruhan</p>
          <p class="mt-4 pt-2 border-t border-white border-opacity-30 text-xs opacity-80 italic">Laki-laki & Perempuan</p>
        </div>

        <div class="bg-blue-900 rounded-xl shadow-2xl p-6 text-white transition-transform duration-300 hover:scale-[1.05] transform">
          <div class="flex items-center justify-between">
            <p class="text-5xl font-extrabold tracking-tight">18</p>
            <svg class="w-12 h-12 opacity-80" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
            </svg>
          </div>
          <p class="mt-2 text-lg font-medium opacity-100">Total Mahasiswa</p>
          <p class="mt-4 pt-2 border-t border-white border-opacity-30 text-xs opacity-80 italic">Angkatan Aktif</p>
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
