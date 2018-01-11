<template>
  <div>
    <h1>Lets learn Vuex</h1>
    {{count}}

    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'LearnVuex',
    computed: {
      count: {
        // reload increment
        ...mapGetters([
          'count'
        ])
      }
    },
    watch: {
    },
    methods: {
      handleClick () {
        this.$store.commit('increment')
        this.$store.dispatch('doIncrement')
      }
    }
  }
</script>
