<template>
  <div class="max-w-7xl mx-4 py-6 sm:px-6 lg:px-8">
    <p>
    Vous avez actuellement {{ count }} discographies dans votre librairie.
    </p>
    <base-array
      v-show="libraries && libraries.length > 0"
      :discography="libraries"
      title="libraries"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "library-view",
  methods: {
    ...mapActions({
      removeAll: 'removeAll'
    }),
    removeData: function() {
      if(this.count > 0 ) { this.removeAll(); }
    },
  },
  computed: {
    libraries: function() {
      let store = this.$store.state.libraries;
      return (store && store.length > 0)? store : [];
    },
    count: function() {
      return this.$store.state.count
    },
		stringParse: function() {
			return (this.count && this.count > 1) ? 'librariesnés' : 'librariesné'
		},
  },
};
</script>

<style>
</style>
