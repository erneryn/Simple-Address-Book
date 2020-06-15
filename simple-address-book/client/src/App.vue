<template>
  <v-app>
    
    <Navbar/>
    <Home/>
    <!-- <v-content>
      <HelloWorld />
    </v-content> -->

  </v-app>
</template>

<script>
import Home from '@/views/Home'
import Navbar from '@/components/Navbar';
export default {
  name: "App",
  components: {
    Navbar,
    Home
  },

  created(){
    this.$store.dispatch('fecthData')
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss" scoped >
  .left{
    width:50vw
  }

</style>
