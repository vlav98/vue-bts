<template>
  <div>
    <h1 class="text-3xl font-bold leading-tight text-gray-900 pb-4">Contact Me</h1>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 text-justify">
    <p>
      <ul class="text-justify">
        <li>Email: {{email}}</li>
        <li>Portfolio(Fr): <a href="https://vlav.carrd.co/" class="text-bold text-primary">{{carrdFr}}</a></li>
        <li>Portfolio(Eng): <a href="https://vlav-eng.carrd.co/" class="text-bold text-primary">{{carrdEng}}</a></li>
        <li>Twitter: <a href="https://twitter.com/vlav98" class="text-bold text-primary">{{twitter}}</a></li>
      </ul>
    </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data(){
    return {
      email: 'Peut être que je le mettrais un jour',
      carrdEng: 'https://vlav-eng.carrd.co/',
      carrdFr: 'https://vlav.carrd.co/',
      twitter: 'https://twitter.com/vlav98',
    }
  }
}
</script>