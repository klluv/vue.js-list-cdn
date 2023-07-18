<template>
  <div>
      <h1>{{ title }}</h1>
      <tests></tests>
  </div>
</template>

<script>
// Imports
import Tests from './tests.vue';

export default {
  components: {
      'tests': Tests
  },
  data () {
      return {
        title: 'Tests App'
      }
  }
}
</script>

<style>
</style>
