<template>
  <div class="hello">
    <!--one way data binding-->
    <h1>{{ oneWayData }}</h1>
    <h2>{{ twoWayData }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      oneWayData: 'Session to Your Vue.js App',
      twoWayData: 'Two way data binding'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
