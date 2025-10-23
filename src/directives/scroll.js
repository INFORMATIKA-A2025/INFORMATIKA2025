// src/directives/scroll.js

export default {
  // Hook 'mounted' dipanggil ketika elemen directive dimasukkan ke DOM.
  mounted(el, binding) {
    // 1. Definisikan fungsi handler yang akan dijalankan saat scrolling.
    const handler = () => {
      // Panggil fungsi yang diberikan di binding.value (yaitu metode handleScroll)
      // dan kirimkan window.scrollY (posisi scroll vertikal saat ini).
      binding.value(window.scrollY);
    };

    // 2. Tambahkan event listener untuk event 'scroll' pada objek window.
    window.addEventListener("scroll", handler);

    // 3. Simpan referensi ke handler pada elemen (el) dengan properti unik.
    // Ini PENTING agar kita bisa menghapus listener dengan benar di hook 'unmounted'.
    el._scrollHandler = handler;
  },

  // Hook 'unmounted' dipanggil ketika elemen directive dilepas dari DOM.
  unmounted(el) {
    // 4. Hapus event listener untuk mencegah kebocoran memori (memory leak).
    window.removeEventListener("scroll", el._scrollHandler);

    // Hapus properti _scrollHandler yang disimpan.
    delete el._scrollHandler;
  },
};
