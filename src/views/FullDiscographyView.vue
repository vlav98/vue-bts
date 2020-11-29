<template>
  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <ul class="my-2 flex justify-center">
      <li class="inline-flex rounded-md dark:bg-primary shadow button mx-4">
        <a class="text-black rounded hover:bg-blue-500 px-4 py-2 focus:outline-none" href="#" @click.prevent="currentComponent = 'discography-view'">Toute la discographie</a>
      </li>
      <li class="inline-flex rounded-md dark:bg-primary shadow button mx-4">
        <a class="text-black rounded hover:bg-blue-500 px-4 py-2 focus:outline-none" href="#" @click.prevent="currentComponent = 'library-view'">Collection</a>
      </li>
    </ul>
    <keep-alive>
      <component :is="currentComponent" v-bind="currentProps"> </component>
    </keep-alive>
  </div>
</template>

<script>
import DiscographyView from "../components/discography/DiscographyView.vue";
import LibraryView from "../components/LibraryView.vue";

export default {
  name: "fulldiscography-view",
  components: {
    DiscographyView,
    LibraryView,
  },
  data() {
    return {
      currentComponent: "discography-view",
    };
  },
  computed: {
    currentProps() {
      if (this.currentComponent == "discography-view") {
        return { team: this.teamSelected };
      }
      return false;
    },
  },
};
</script>

<style>
.dark {
  option:selected {
    background-color: black;
  }

  li.button:hover {
    background-color: $dark-primary !important;
  }
}
</style>
