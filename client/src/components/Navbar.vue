<template>
  <v-app-bar app color="primary">
      <div class="d-flex align-center justify-center left">
        <v-toolbar-title class="text-uppercase white--text">
          <span class="font-weight-light">ADDRESS </span>
          <span>BOOK</span>
        </v-toolbar-title>
      </div>
        <div class="d-flex align-center left">
      <AddContact/>
          <v-text-field
        flat
        rounded
        v-model="searchKey"
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="ml-5"
      />
      </div>
    </v-app-bar>
</template>

<script>
import AddContact from './AddContact'
export default {
    name:'Navbar',
    data(){
      return{
        searchKey : null
      }
    },
    components:{
        AddContact
    },
    watch:{
      searchKey:function(){
        this.$store.commit('SEARCH',this.searchKey)
      }
    }
}
</script>
<style lang="scss" scoped >
  .left{
    width:50vw
  }

</style>
