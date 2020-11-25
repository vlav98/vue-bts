<template>
<div class="dark:bg-black" id="main-view">
    <NavBar></NavBar>
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold leading-tight text-gray-900">Discographie de BTS</h1>
    </div>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <!-- <div class="px-4 py-6 sm:px-0">
        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
      </div>--> 
      <router-view></router-view>
      <!--<discography-card
        v-show="datas && discographys.length > 0"
        v-for="(discography, i) in discographys"
        :key="i"
        class="item-list"
        :class="[i % 2 == 0 ? 'red' : 'blue', discographyPicked(discography)]"
        :discographyData="discography"
        :index="i"
        @add-data="(data) => addOne(data)"
        @remove-data="(discography) => removeOne(discography)"
      /> -->
      <!-- /End replace -->
    </div>
  </div>
</template>

<script>
import NavBar from './components/nav/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
