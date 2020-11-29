<template>
  <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-bold leading-tight text-gray-900">Discographie de BTS</h1>
  </div>
  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
    <div class="flex-wrap md:flex md:mx-6 mb-4">
      <div class="">
        <select class="dark:bg-transparent border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-800 focus:border-indigo-800 sm:text-sm" v-model="selectedYear" @change="filterByYear($event)">
          <option class="dark:bg-black" value="null" selected>{{ yearOption }}</option>
          <option class="dark:bg-black" v-for="year in Years" :key="year" :value="year" @click.prevent="filterAlbums(year)"> {{ year }} </option>
        </select>
      </div>
    </div>
    <div class="md:flex md:-mx-4 flex-wrap justify-center sm:px-4">
      <discography-card
        v-show="(discography.Year == selectedYear && selectedYear != null) || selectedYear == null"
        v-for="(discography, i) in discographys"
        :key="i"
        class="item-list sm:mx-4"
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
import DiscographyCard from "../components/discography/DiscographyCard.vue";

export default {
  name: "Discography",
  components: {
    DiscographyCard,
  },
  data() {
    return {
      datas: datas,
      counter: 0,
      isCompleted: false,
      list: [],
      errorMessages: [],
      selectedYear: null,
      yearOption: "Select a year",
      Years: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
      Genres: ["Accoustic", "Ballad", "Dance-pop", "Disco", "EDM", "Electronica", "Emo hip-hop", "Grudge rock", "Hip Hop", "J-pop", "Moombahton", "Pop", "R&B", "Rap Rock", "Rock", "Soul", "Trap"],
      Type: ["Adapted Songs", "Collaboration", "Compilation Albums", "Cover Songs", "Digital Singles", "Mini Album", "Mixtapes", "Original Songs", "Sampled Songs", "Single Albums", "Soundtrack albums", "Studio Album", "Unofficial Songs"],
    };
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
    filterByYear(event) {
      this.selectedYear = (event.target.value == "null") ? null : event.target.value;
      console.log(event.target.value);
    },
  },
  computed: {
    discographys: function () {
      return datas;
    },
  },
  watch: {
  },
};
</script>

<style>
.dark {
  option:selected {
    background-color: black;
  }
}
</style>
