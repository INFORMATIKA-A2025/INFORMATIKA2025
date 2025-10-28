<template>
  <h2 id="subjudul" class="animate-bounce animate-infinite flex justify-center text-2xl font-semibold text-gray-900 sm:text-3xl mb-10">STRUCTURE</h2>

  <swiper
    ref="{swiperRef}"
    :centeredSlides="true"
    :spaceBetween="30"
    :pagination="{
      type: 'fraction',
    }"
    :navigation="true"
    :modules="modules"
    :breakpoints="swiperBreakpoints"
    class="structure-slider"
  >
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <div class="slide-card-container">
        <div class="block rounded-lg p-4 shadow-xl shadow-indigo-200">
          <div class="image-1-1-container">
            <img :src="slide.url" :alt="'Slide Image ' + (index + 1)" class="w-full h-full rounded-md object-cover" />
          </div>

          <div class="mt-4 text-center">
            <h3 class="font-bold text-lg text-gray-900">{{ slide.title || "None" }}</h3>
            <p class="text-sm text-gray-600">{{ slide.description || "None" }}</p>
          </div>

          <div class="flex justify-center pt-3 gap-30">
            <a :href="slide.instagram" target="_blank" rel="noopener noreferrer">
              <img src="../assets/instagram.png" alt="IG" width="30" />
            </a>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ImageRijal from "@/assets/structure/ijal.jpg";
import ImageAlfi from "@/assets/structure/alfi.png";
import ImageAlni from "@/assets/structure/bendahara.jpg";
import ImageDewi from "@/assets/structure/sekertaris.jpg";
import ImagePTI from "@/assets/structure/pti.jpg";
import ImageAkidah from "@/assets/structure/akidah.jpg";
import ImageDika from "@/assets/structure/dika.jpg";
import ImageAlwi from "@/assets/structure/alwi.jpg";
import ImageAziz from "@/assets/structure/aziz.jpg";
import ImageDwi from "@/assets/structure/dwi.jpg";
import ImageRidwan from "@/assets/structure/ridwanfixx.jpg";
import ImageOjak from "@/assets/structure/ojak.jpg";
import ImageDinar from "@/assets/structure/dinar.jpg";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiperBreakpoints = {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 15,
        centeredSlides: true,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 25,
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
      },
    };
    const slides = [
      { url: ImageRijal, title: "Muhammad Rizal Saibulwafa", instagram: "https://www.instagram.com/mhammadrizalswafa", description: "Komisariat Mahasiswa (Kosma) " },
      { url: ImageAlni, title: "Alni Nofiani", instagram: "https://www.instagram.com/allniii02", description: "Bendahara " },
      { url: ImageDewi, title: "Dewi Suryaningsih", instagram: "https://www.instagram.com/dewsrnn", description: "Sekertaris" },
      { url: ImageAlfi, title: "Alfiansyah Sibyanurrizki", instagram: "https://www.instagram.com/allpppii", description: "Publikasi, Dokumentasi, Desain (PDD)" },
      { url: ImageDika, title: "Dhika Zahira Prasetya", instagram: "https://www.instagram.com/prastya.__", description: "Publikasi, Dokumentasi, Desain (PDD)" },
      { url: ImagePTI, title: "Anitia Rahma", instagram: "https://www.instagram.com/itsme_iyaw", description: "Penanggung Jawab Mata Kuliah - Pengantar Teknologi Informasi" },
      { url: ImageAlwi, title: "Alwi Hidayat", instagram: "https://www.instagram.com/alwihidayat57", description: "Penanggung Jawab Mata Kuliah - Kalkulus I" },
      { url: ImageOjak, title: "Abdul Rojak", instagram: "https://www.instagram.com/abdl_rjak", description: "Penanggung Jawab Mata Kuliah - Pengantar Rekayasa Desain" },
      { url: ImageRidwan, title: "Ridwan Muttaqin", instagram: "https://www.instagram.com/wannzz080", description: "Penanggung Jawab Mata Kuliah - Dasar-Dasar Pemrograman" },
      { url: ImageAkidah, title: "Lindi Sepdiyana", instagram: "https://www.instagram.com/lynnnn_synnnn", description: "Penanggung Jawab Mata Kuliah - Akidah" },
      { url: ImageAziz, title: "Abdul Aziz", instagram: "https://www.instagram.com/abd__azisss", description: "Penanggung Jawab Mata Kuliah - Pengantar Kewirausahaan" },
      { url: ImageDwi, title: "Dwi Saputra", instagram: "https://www.instagram.com/dwisaputra5162", description: "Penanggung Jawab Mata Kuliah - Bahasa Indonesia" },
      { url: ImageDika, title: "Dhika Zahira Prasetya", instagram: "https://www.instagram.com/prastya.__", description: "Penanggung Jawab Mata Kuliah - Fisika Dasar" },
      { url: ImageDinar, title: "Dinar Herawan", instagram: "https://www.instagram.com/herawan_79", description: "Penanggung Jawab Mata Kuliah - Pancasila" },
      { url: ImageAlfi, title: "Alfiansyah Sibyanurrizki", instagram: "https://www.instagram.com/allpppii", description: "Penanggung Jawab Mata Kuliah - Bahasa Inggris" },
    ];
    return {
      modules: [Navigation, Pagination],
      slides,
      swiperBreakpoints,
    };
  },
};
</script>

<style scoped>
.image-1-1-container {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}

.structure-slider {
  padding: 50px 0;
}

.structure-slider .swiper-slide-active {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.image-1-1-container img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
