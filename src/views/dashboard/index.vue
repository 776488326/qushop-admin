<template>
  <div>
    <Card></Card>
    <Observe></Observe>
  </div>
</template>

<script>
import Card from './Card'
import Observe from './Observe'
export default {
  name: '',
  components:{
    Card,
    Observe
  },
  mounted(){
    this.$store.dispatch('getData');
  }
}
</script>

<style scoped>

</style>
