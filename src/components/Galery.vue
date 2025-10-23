<template>
  <h2 id="subjudul" class="animate-bounce animate-infinite flex justify-center text-2xl font-semibold text-gray-900 sm:text-3xl">GALLERY</h2>
  <swiper
    :speed="600"
    watchSlidesProgress="true"
    :effect="'coverflow'"
    :grabCursor="true"
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    :breakpoints="swiperBreakpoints"
    class="coverflow-slider"
  >
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <div class="slide-content">
        <img :src="slide.url" :alt="'Slide Image ' + (index + 1)" />
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import Image1 from "@/assets/coming.jpg";

import { Autoplay, Navigation, EffectCoverflow, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiperBreakpoints = {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        coverflowEffect: {
          rotate: 40,
          stretch: 0,
          depth: 70,
          modifier: 1,
          slideShadows: false,
        },
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 20,
        coverflowEffect: {
          rotate: 45,
          stretch: 0,
          depth: 80,
          modifier: 1,
          slideShadows: false,
        },
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 30,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        },
      },
    };
    const slides = [{ url: Image1 }, { url: Image1 }, { url: Image1 }, { url: Image1 }, { url: Image1 }, { url: Image1 }];
    return {
      modules: [Autoplay, Navigation, EffectCoverflow],
      slides,
      swiperBreakpoints,
    };
  },
};
</script>

<style>
.coverflow-slider {
  height: 500px;
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
}

.slide-content {
  width: 100%;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 1 / 1;
}

.slide-content img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}
</style>
