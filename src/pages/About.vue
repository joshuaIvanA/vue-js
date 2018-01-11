<template>
  <div>
    <h1>Hello i'm a new router</h1>
    <div>
      DataA: {{dataA}}
    </div>
    <div>
      DataB: {{dataB}}
    </div>
    <div>
      DataC: {{dataC}}
    </div>

    <!--two way data binding-->
    <input type="text" v-model="dataB">

  </div>
</template>

<script>
  export default {
    name: 'About',
    data () {
      return {
        dataA: 'A',
        dataB: 'B'
      }
    },
    method: {
    },
    computed: {
      dataC: function () {
        // this refers to the vue component
        return this.dataA + ' ' + this.dataB
      }
    },
    watch: {
      dataB: function (value) {
        // value from dataB
        console.log('New value: ', value)
      }
    }
  }
</script>

<style scoped="">

</style>
