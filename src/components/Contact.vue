<template>
  <h2 id="subjudul" class="animate-bounce animate-infinite flex justify-center text-2xl font-semibold text-gray-900 sm:text-3xl">CONTACT</h2>

  <div class="flex justify-center isolate bg-white px-6 py-20 sm:py-16 lg:px-8">
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div
        class="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-288.75"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      />
    </div>
    <form @submit.prevent="generateWhatsappLink" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block text-sm/6 font-semibold text-black">First name</label>
          <div class="mt-2.5">
            <input
              type="text"
              id="first-name"
              v-model="formData.firstname"
              autocomplete="given-name"
              class="block w-full rounded-md bg-gray-300 px-3.5 py-2 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
            />
          </div>
        </div>
        <div>
          <label for="last-name" class="block text-sm/6 font-semibold text-black">Last name</label>
          <div class="mt-2.5">
            <input
              type="text"
              v-model="formData.lastname"
              id="last-name"
              autocomplete="family-name"
              class="block w-full rounded-md bg-gray-300 px-3.5 py-2 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="message" class="block text-sm/6 font-semibold text-black">Message</label>
          <div class="mt-2.5">
            <textarea
              name="message"
              id="message"
              v-model="formData.message"
              rows="4"
              class="block w-full rounded-md bg-gray-300 px-3.5 py-2 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
            />
          </div>
        </div>
        <div class="flex gap-x-4 sm:col-span-2">
          <div class="flex h-6 items-center"></div>
        </div>
      </div>
      <div class="mt-10">
        <a
          v-if="canSubmit"
          :href="whatsappLink"
          target="_blank"
          class="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          @click="generateWhatsappLink"
        >
          Let's talk
        </a>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  setup() {
    const targetPhoneNumber = "6282124972310";

    const formData = reactive({
      firstname: "",
      lastname: "",
      message: "",
    });

    const canSubmit = computed(() => {
      return formData.firstname.length > 0 && formData.lastname.length > 0 && formData.message.length > 0;
    });

    const messageText = computed(() => {
      return `Halo, perkenalkan saya ${formData.firstname} ${formData.lastname}. Saya ingin mengajak kelas IF-A berdiskusi. ${formData.message}.`;
    });

    const whatsappLink = computed(() => {
      const encodedMessage = encodeURIComponent(messageText.value);

      return `https://wa.me/${targetPhoneNumber}?text=${encodedMessage}`;
    });

    const generateWhatsappLink = () => {
      console.log("Link Whatsapp berhasil terkirim", whatsappLink.value);
    };

    return {
      formData,
      whatsappLink,
      generateWhatsappLink,
      canSubmit,
    };
  },
};
</script>
