<template>
  <div class="rounded border border justify-between dark w-full mb-2 md:w-5/12 md:mx-4 border rounded shadow-sm">
    <div class="px-4 py-4">
        <h3 class="font-semibold leading-tight text-2xl mb-2">{{ discographyData.Name }}</h3>
        <div class="mb-2 text-justify">
          <p><span style="font-weight: bold">Genre</span> : {{ discographyData.Genre }}</p>
          <p><span style="font-weight: bold">Release Year</span> : {{ discographyData.Year }}</p>
          <p><span style="font-weight: bold">Language</span> : {{ discographyData.Language }}</p>
          <p><span style="font-weight: bold">Type</span> : {{ discographyData.Type }}</p>
        </div>
        <div class="flex">
            <base-button text="Add One" class="add mr-2" :index="index" @click="addData(discographyData)" />
            <base-button text="Remove One" class="remove" :index="index" @click="removeData(discographyData)" />
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "main-view",
  props: {
    discographyData: Object,
    index: Number,
    clickMethod: Function,
  },
  data(){
    return {
      discography: this.discographyData,
    }
  },
  methods: {
    addData: function (discography) {
      this.$emit("add-data", discography);
    },
    removeData: function (discography) {
      this.$emit("remove-data", discography);
    },
  },
  computed: {},
};
</script>

<style></style>
