<template>
  <div>
    <nav class="bg-black flex items-center flex-wrap">
      <div
        class="max-w-7xl w-full lg:mx-4 sm:px-6 lg:px-8 flex items-center flex-wrap"
      >
        <div class="p-2 mr-4 inline-flex items-center">
          <router-link to="/" class="font-bold h-8 w-8 text-white">
            LV
          </router-link>
        </div>
        <button
          class="inline-flex text-white p-3 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
          data-target="#mainnav"
          aria-expanded="false"
          @click="isOpen = !isOpen"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            class="hidden h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div :class="{'flex': isOpen, 'hidden' : !isOpen }" class="top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto">
          <div class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            <router-link to="/home" class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 items-center justify-center ">Home</router-link>
            <router-link to="/discography" class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white hover:bg-gray-700 items-center justify-center ">Discography</router-link>
            <router-link to="/about" class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white hover:bg-gray-700 items-center justify-center ">About</router-link>
            <router-link to="/contact" class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white hover:bg-gray-700 items-center justify-center ">Contact</router-link>
          </div>
          <div class="mx-4 hidden sm:block sm:ml-6">
            <div class="toggle toggle--daynight">
              <input type="checkbox" id="toggle--daynight" class="toggle--checkbox" v-model="dayModeCheck" @click="changeMode(dayModeCheck)" />
              <label class="toggle--btn" for="toggle--daynight"><span class="toggle--feature"></span></label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  data: () => ({
    dayModeCheck: null,
    isOpen: false,
  }),
  mounted() {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      this.dayModeCheck = false;
      document.querySelector("html").classList.add("dark");
    } else {
      this.dayModeCheck = true;
      document.querySelector("html").classList.remove("dark");
    }
  },
  components: {},
  methods: {
    changeMode(dayModeCheck) {
      if (dayModeCheck) {
        this.dayModeCheck = false;
        document.querySelector("html").classList.add("dark");
      } else {
        this.dayModeCheck = true;
        document.querySelector("html").classList.remove("dark");
      }
    },
  },
};
</script>

<style lang="scss"></style>
