<template>
  <div>
    <nav class="bg-black">
      <div class="max-w-7xl mx-4 px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0 mx-4">
              <span class="font-bold h-8 w-8 text-white"> LV </span>
            </div>
            <div class="block mx-4">
              <div class="ml-10 flex items-baseline space-x-4">
                <router-link to="/home" class="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900">Home</router-link>
                <router-link to="/discography" class="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white hover:bg-gray-700">Discography</router-link>
                <router-link to="/about" class="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white hover:bg-gray-700">About</router-link>
                <router-link to="/contact" class="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white hover:bg-gray-700">Contact</router-link>
              </div>
            </div>
          </div>
          <div class="mx-4">
            <div class="toggle toggle--daynight">
              <input type="checkbox" id="toggle--daynight" class="toggle--checkbox" />
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
    isOpen: false,
  }),
  components: {},
};
</script>

<style lang="scss"></style>
