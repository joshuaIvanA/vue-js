<template>
  <div>
    <h1>Loop Test</h1>

      <!--looping-->
      <!--v-bind(:) v-on(@)-->
      <router-link :to="item.url"
                   v-for="item in menus"
                   :class="{red:item.label=='Home'}" :key="item.id">
        <a>{{item.label}}</a><br>
      </router-link>

    <h2>List</h2>
    <ul>
      <li v-for="item in list">
        <a>{{item}}</a>
      </li>
    </ul>

    <button @click="goAlert">Go alert</button>

  </div>

</template>

<script>
  export default {
    name: 'Loop',
    data () {
      return {
        list: [1, 2, 3, 4],
        menus: {
          home: {
            url: '/',
            label: 'Home'
          },
          about: {
            url: '/about',
            label: 'About'
          },
          api: {
            url: '/learn-api',
            label: 'LearnApi'
          },
          props: {
            url: '/props-and-events',
            label: 'PropsAndEvents'
          }
        }
      }
    },
    methods: {
      goAlert: function () {
        alert('Alert')
      }
    }
  }
</script>

<style scoped="">
  .red{
    color: red;
  }
</style>
