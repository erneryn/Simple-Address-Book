<template>
  <v-content>
   <v-container >
     <v-row>
       <v-col><List 
       :Contacts="filteredContacts"
       @selected-contact="setSelected"
       /></v-col>
       <v-col class="bg">
         <DetailList 
         v-if="SelectedContact" 
         :selected="SelectedContact"
         @success-delete="SelectedContact = false"/>
         <div v-if="!SelectedContact" class="text-center my-10"> 
           No Contact Selected
         </div>
       </v-col>
     </v-row>
   </v-container>
  </v-content>
</template>
<script>
  import List from "@/components/List";
  import DetailList from "@/components/DetailList"

export default {
  name: "Home",
  components: {
    List,
    DetailList
  },
  data(){
    return{
      SelectedContact: false,
    }
  },

  methods:{
    setSelected(contact){
      this.SelectedContact = contact
    }
  },

  computed: {
    filteredContacts(){
      return this.$store.state.Contacts.filter(contact =>{
        return contact.name.toLowerCase().includes(this.$store.state.Search.toLowerCase())
      })
    }
  }
};
</script>
<style lang="scss" scoped>
  .bg{
    background-color: rgb(198, 196, 199);
  }
</style>