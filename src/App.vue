<template>
<div class="dark:bg-black" id="main-view">
    <NavBar></NavBar>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <router-view></router-view>
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
