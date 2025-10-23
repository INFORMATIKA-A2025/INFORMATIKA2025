<script setup>
import About from "./About.vue";
import Jadwal from "./Jadwal.vue";
import Structure from "./Structure.vue";
import Galery from "./Galery.vue";
import Contact from "./Contact.vue";
</script>

<template>
  <main>
    <section id="about-section">
      <About />
    </section>
    <section id="schedule-section">
      <Jadwal />
    </section>
    <section id="structure-section">
      <Structure />
    </section>
    <section id="galery-section">
      <Galery />
    </section>
    <section id="contact-section">
      <Contact />
    </section>
  </main>
</template>
