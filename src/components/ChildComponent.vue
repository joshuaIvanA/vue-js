<template>
  <div class="child-component">
    <h1>Hey i'm a child component</h1>
    {{someProps}}

    <button @click="handleClick">Click me to fire parent</button>
  </div>
</template>

<script>
  export default {
    name: 'ChildComponent',
    props: {
      someProps: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        msg: 'Welcome to your Vue.js App'
      }
    },
    methods: {
      handleClick () {
        this.$emit('clickMe', 'I pass param ya!')
      }
    }
  }
</script>

<style>
</style>
