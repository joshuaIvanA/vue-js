<template>
  <div>
    <h1>Hey let's learn API</h1>

    <ul class="films">
      <li v-for="(film , index) in films" :key="film.id">
        {{index}}. {{film.title}}
      </li>
    </ul>

    <button @click="callApi">Call Api</button>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'LearnApi',
    data () {
      return {
        films: []
      }
    },
    methods: {
      callApi () {
        const URL = 'https://ghibliapi.herokuapp.com/films'
        // call api here
        axios.get(URL)
          .then(response => {
            this.films = response.data
          })
          .catch(error => {
            console.log(error)
          })
        console.log('call api with ', axios)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .films{
    list-style: none;
    li{
      padding: 1em;
    }
  }
</style>
