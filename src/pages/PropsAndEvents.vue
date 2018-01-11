<template>
  <div class="props-and-events">
    <h1>Lets learn about Props and events</h1>

    <div>{{dataParent}}</div>
    <input type="text" v-model="dataParent">

    <!--child component uses parent data-->
    <ChildComponent
      :someProps="dataParent"
      @clickMe="someMethod">
    </ChildComponent>

  </div>
</template>

<script>
  import ChildComponent from '@/components/ChildComponent'

  export default{
    name: 'PropsAndEvents',
    components: {ChildComponent},
    data () {
      return {
        dataParent: 'i am parent'
      }
    },
    watch: {
      dataParent: function () {
        console.log(this.dataParent)
      }
    },
    methods: {
      someMethod (param) {
        alert(param)
      }
    }
  }
</script>
