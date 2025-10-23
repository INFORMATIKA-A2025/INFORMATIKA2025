<script setup>
import { reactive } from "vue";

// Data statistik Anda
const stats = reactive([
  {
    icon: "M17.923,21.5c-2.47-1.469-5.185-2.204-8.847-2.204c-3.664,0-6.381,0.735-8.852,2.204L0,22.25v2.25h20.5v-2.25L17.923,21.5z M10.5,1.75C8.019,1.75,6,3.769,6,6.25c0,2.482,2.019,4.5,4.5,4.5c2.481,0,4.5-2.018,4.5-4.5C15,3.769,12.981,1.75,10.5,1.75z",
    label: "Mahasiswa Aktif",
    value: "30",
    bgColor: "bg-blue-600",
    footer: "Total Seluruh Angkatan",
  },
  {
    icon: "M17.069,10.035c-0.246-0.082-0.518-0.126-0.793-0.126c-0.033,0-0.065,0-0.098,0.002C14.887,9.39,13.064,8.966,11.23,8.966c-1.834,0-3.655,0.424-5.083,0.945C6.01,9.911,5.978,9.911,5.945,9.911c-0.275,0-0.547,0.044-0.792,0.126C3.606,10.601,2.5,12.285,2.5,14.25v5.5c0,1.378,1.122,2.5,2.5,2.5h11c1.378,0,2.5-1.122,2.5-2.5v-5.5C19,12.285,17.894,10.601,17.069,10.035z M10.5,1.75C8.019,1.75,6,3.769,6,6.25c0,2.482,2.019,4.5,4.5,4.5c2.481,0,4.5-2.018,4.5-4.5C15,3.769,12.981,1.75,10.5,1.75z",
    label: "Total Dosen & Mentor",
    value: "7",
    bgColor: "bg-indigo-600",
    footer: "Termasuk Dosen Luar Biasa",
  },
  {
    icon: "M16,2.5H4C2.622,2.5,1.5,3.622,1.5,5v13c0,1.378,1.122,2.5,2.5,2.5h12c1.378,0,2.5-1.122,2.5-2.5V5C18.5,3.622,17.378,2.5,16,2.5z M4,4.5h12c0.275,0,0.5,0.224,0.5,0.5v13c0,0.276-0.225,0.5-0.5,0.5H4c-0.276,0-0.5-0.224-0.5-0.5V5C3.5,4.724,3.724,4.5,4,4.5z M6.5,7.5h7c0.276,0,0.5,0.224,0.5,0.5S13.776,8.5,13.5,8.5h-7C6.224,8.5,6,8.276,6,8S6.224,7.5,6.5,7.5z M6.5,11.5h4c0.276,0,0.5,0.224,0.5,0.5S10.776,12.5,10.5,12.5h-4C6.224,12.5,6,12.276,6,12S6.224,11.5,6.5,11.5z M6.5,15.5h7c0.276,0,0.5,0.224,0.5,0.5S13.776,16.5,13.5,16.5h-7C6.224,16.5,6,16.276,6,16S6.224,15.5,6.5,15.5z",
    label: "Total Mata Kuliah",
    value: "25",
    bgColor: "bg-green-600",
    footer: "Wajib dan Pilihan",
  },
  {
    icon: "M10.25,2.5c4.142,0,7.5,3.358,7.5,7.5S14.392,17.5,10.25,17.5c-4.142,0-7.5-3.358-7.5-7.5S6.108,2.5,10.25,2.5z M10.25,4.5c-3.033,0-5.5,2.467-5.5,5.5s2.467,5.5,5.5,5.5s5.5-2.467,5.5-5.5S13.283,4.5,10.25,4.5z M11.25,6.5V9.5h3.5v1h-4.5V6.5h1z",
    label: "Lulus Tepat Waktu",
    value: "87%",
    bgColor: "bg-yellow-600",
    footer: "Rata-rata 4 Tahun",
  },
]);
</script>

<template>
  <section id="academic-stats" class="py-10 md:py-16 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-center mb-10 md:mb-14 text-gray-900 dark:text-white">ANGKA KAMI BICARA: KOMUNITAS INFORMATIKA</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(stat, index) in stats" :key="index" :class="[stat.bgColor]" class="rounded-lg shadow-xl p-6 text-white transition-transform duration-300 hover:scale-[1.02] transform hover:shadow-2xl">
          <div class="flex items-center justify-between">
            <p class="text-5xl font-extrabold tracking-tight">
              {{ stat.value }}
            </p>

            <svg class="w-12 h-12 opacity-70" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path :d="stat.icon"></path>
            </svg>
          </div>

          <p class="mt-2 text-lg font-medium opacity-90">{{ stat.label }}</p>

          <p class="mt-4 pt-2 border-t border-white border-opacity-30 text-xs opacity-70 italic">
            {{ stat.footer }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
