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
            <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer">
              <img src="../assets/whatsapp.png" alt="WA" width="30" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
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

import Image1 from "@/assets/coming.jpg";
import ImageRijal from "@/assets/structure/ijal.jpg";
import ImageAlfi from "@/assets/structure/alfi.png";

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
      { url: ImageRijal, title: "Muhammad Rizal Saibulwafa", description: "Komisariat Mahasiswa (Kosma) " },
      { url: Image1, title: "None", description: "Bendahara " },
      { url: Image1, title: "None", description: "Sekertaris" },
      { url: ImageAlfi, title: "Alfiansyah Sibyanurrizki", description: "Publikasi, Dokumentasi, Desain (PDD)" },
      { url: Image1, title: "None", description: "Publikasi, Dokumentasi, Desain (PDD)" },
      { url: Image1, title: "None", description: "Penanggung Jawab Mata Kuliah - " },
      { url: Image1, title: "None", description: "Penanggung Jawab Mata Kuliah - " },
      { url: Image1, title: "None", description: "Penanggung Jawab Mata Kuliah - " },
      { url: Image1, title: "None", description: "Penanggung Jawab Mata Kuliah - " },
      { url: Image1, title: "None", description: "Penanggung Jawab Mata Kuliah - " },
      { url: Image1, title: "None", description: "Penanggung Jawab Mata Kuliah - " },
      { url: Image1, title: "None", description: "Penanggung Jawab Mata Kuliah - " },
      { url: Image1, title: "None", description: "Penanggung Jawab Mata Kuliah - " },
      { url: Image1, title: "None", description: "Penanggung Jawab Mata Kuliah - " },
      { url: Image1, title: "None", description: "Penanggung Jawab Mata Kuliah - " },
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
