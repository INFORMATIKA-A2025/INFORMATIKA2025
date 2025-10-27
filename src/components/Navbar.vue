<template>
  <div class="fixed top-0 w-full z-50 transition-all duration-300" :class="[isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent']" v-scroll="handleScroll">
    <div class="mx-auto flex h-16 max-w-screen-xl items-center px-4 sm:px-6 lg:px-8">
      <router-link class="flex items-center" to="/">
        <span class="sr-only">Home</span>

        <img src="../assets/STTC.png" alt="STTC" class="w-auto transition-all duration-300" :class="[isScrolled ? 'h-10 md:h-42' : 'h-42 md:h-42']" />
      </router-link>

      <div class="flex flex-1 items-center justify-end md:justify-between md:pl-110">
        <nav aria-label="Global" class="hidden md:block">
          <ul class="flex items-center gap-6 text-base font-medium">
            <li><router-link to="/home#about-section" class="nav-link">About</router-link></li>
            <li><router-link to="/home#schedule-section" class="nav-link">Schedule</router-link></li>
            <li><router-link to="/home#structure-section" class="nav-link">Structure</router-link></li>
            <li><router-link to="/home#galery-section" class="nav-link">Galery</router-link></li>
            <li><router-link to="/home#contact-section" class="nav-link">Contact</router-link></li>

            <li>
              <a href="https://www.instagram.com/informatika.a_llstt_cipasung" target="_blank" rel="noopener noreferrer">
                <img src="../assets/instagram.png" alt="ig_kelas" class="w-6 h-6 hover:opacity-80 transition" />
              </a>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-4 md:hidden">
          <button @click="isMenuOpen = !isMenuOpen" class="rounded-md p-2.5 transition focus:outline-none" :class="isScrolled ? 'bg-gray-100 text-gray-600 hover:text-gray-900' : 'text-gray-900 hover:bg-gray-200'" aria-label="Toggle menu">
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div v-if="isMenuOpen" class="md:hidden bg-white shadow-lg border-t border-gray-100">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link @click="closeMenu" to="/home#about-section" class="mobile-nav-link">About</router-link>
        <router-link @click="closeMenu" to="/home#schedule-section" class="mobile-nav-link">Schedule</router-link>
        <router-link @click="closeMenu" to="/home#structure-section" class="mobile-nav-link">Structure</router-link>
        <router-link @click="closeMenu" to="/home#galery-section" class="mobile-nav-link">Galery</router-link>
        <router-link @click="closeMenu" to="/home#contact-section" class="mobile-nav-link">Contact</router-link>

        <a href="https://www.instagram.com/informatika.a_llstt_cipasung" target="_blank" rel="noopener noreferrer" @click="closeMenu" class="mobile-nav-link flex items-center gap-2">
          <img src="../assets/instagram.png" alt="ig_kelas" class="w-6 h-6" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false,
      scrollThreshold: 50,
    };
  },
  methods: {
    handleScroll(scrollY) {
      this.isScrolled = scrollY > this.scrollThreshold;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
  watch: {
    $route() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style scoped>
.nav-link {
  color: #1f2937;
  padding: 0.5rem 0.25rem;
  transition: color 0.2s, border-bottom 0.2s;
  border-bottom: 2px solid transparent;
}
.nav-link:hover {
  border-bottom: 2px solid #3b82f6;
}
.nav-link.router-link-exact-active {
  font-weight: 600;
  border-bottom: 2px solid #1e40af;
}

.mobile-nav-link {
  display: block;
  color: #1f2937;
  padding: 0.5rem 0.75rem;
  font-weight: 500;
  border-radius: 0.375rem;
}
.mobile-nav-link:hover {
  background-color: #f3f4f6;
}
.mobile-nav-link.router-link-exact-active {
  font-weight: 600;
  background-color: #ecfdf5;
  color: #3b82f6;
}
</style>
