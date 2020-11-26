<template>
  <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-bold leading-tight text-gray-900">Discographie de BTS</h1>
  </div>
  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div class="md:flex md:-mx-4 flex-wrap justify-center">
      <discography-card
        v-show="datas && discographys.length > 0"
        v-for="(discography, i) in discographys"
        :key="i"
        class="item-list"
        :class="[i % 2 == 0 ? 'red' : 'blue', discographyPicked(discography)]"
        :discographyData="discography"
        :index="i"
        @add-data="(data) => addOne(data)"
        @remove-data="(discography) => removeOne(discography)"
      />
    </div>
  </div>
</template>

<script>
import datas from "./../data/discography.json";
import DiscographyCard from "../components/discography/DiscographyCard.vue"

export default {
  name: "Discography",
  components: {
    DiscographyCard
  },
  data() {
    return {
      datas: datas,
      counter: 0,
      isCompleted: false,
      list: [],
      errorMessages: [],
    }
  },
  methods: {
    addOne: function (discography) {
      if (!this.list.includes(discography)) {
        this.list = [...this.list, discography];
      }
      this.counter = this.list.length;
    },
    removeOne: function (discography) {
      this.list = this.list.filter((item) => {
        return item.name != discography.name;
      });
      this.counter = this.list.length;
      if (this.counter == 0) {
        this.isCompleted = false;
      }
    },
    discographyPicked: function (discography) {
      return this.list.find((item) => item.name === discography.name) ? "grey greyAdd" : "greyRemove";
    },
    getComplete() {
      this.errorMessages = [];
      if (this.list.length > 0) {
        this.isCompleted = true;
      } else {
        const error = "Vous n'avez pas encore sélectionné de discographie";
        if (!this.errorMessages.includes(error)) {
          this.errorMessages.push(error);
        }
      }
    },
  },
  computed: {
    discographys: function () {
      return datas;
    },
  },
};
</script>

<style></style>
