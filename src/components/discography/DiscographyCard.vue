<template>
  <div class="rounded border justify-between dark w-full mb-2 md:w-5/12 md:mx-8 border rounded shadow-sm sm:w-3/4">
    <div class="px-4 py-4">
      <h3 class="font-semibold leading-tight text-2xl mb-2">{{ discographyData.Name }}</h3>
      <div class="mb-2 text-justify">
        <p><span style="font-weight: bold">Genre</span> : {{ discographyData.Genre }}</p>
        <p><span style="font-weight: bold">Release Year</span> : {{ discographyData.Year }}</p>
        <p><span style="font-weight: bold">Language</span> : {{ discographyData.Language }}</p>
        <p><span style="font-weight: bold">Type</span> : {{ discographyData.Type }}</p>
      </div>
      <div class="flex">
        <div class="inline-flex rounded-md dark:bg-primary shadow button">
          <base-button text="Add To Library" class="add text-black rounded hover:bg-blue-500 px-4 py-2 focus:outline-none" :index="index" @click="addOne(Discography)" />
        </div>
        <!-- <base-button text="Remove One" class="remove" @click="removeData(discographyData)" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "discography-card",
  props: ["discography-data"],
  data() {
    return {
      discography: this.discographyData,
      libraries: [],
    };
  },
  methods: {
    ...mapActions({
			addDiscography: 'addDiscography',
			removeDiscography: 'removeDiscography'
		}),
    addOne(discography) {
      if (!this.$store.state.libraries.includes(discography)) {
        this.addDiscography(discography)
      }
    },
    removeData: function (discography) {
      this.$emit("remove-data", discography);
    },
  },
  computed: {},
};
</script>

<style></style>
