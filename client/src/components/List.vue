<template>
  <div class="cont ml-5">
    <v-list subheader :disabled="checkEdit">
      <!-- title list -->
      <v-subheader>All Contacts</v-subheader>

        <v-list-item
          class="item my-1"
          v-for="contact in Contacts"
          :key="contact._id"
          @click="showDetail(contact)"
        >
          <div v-if="contact.avatar.length !== 0">
          <v-list-item-avatar height="6vw" width="6vw">
            <v-img :src="contact.avatar"></v-img>
          </v-list-item-avatar>
          </div>

          <div v-if="contact.avatar.length == 0">
          <v-list-item-avatar height="6vw" width="6vw">
            <v-img :src="'https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png'"></v-img>
          </v-list-item-avatar>
          </div>

          <v-list-item-content>
            <v-list-item-title
              class="font"
              v-text="contact.name.toUpperCase()"
            ></v-list-item-title>
            <v-list-item-subtitle class="subtitle"
              >0{{ contact.phoneNumber }}</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
          </v-btn>
        </v-list-item-action>

        </v-list-item>

    </v-list>
  </div>
</template>

<script>
export default {
  props: ["Contacts"],
  name: "List",
  data(){
    return{
      checkEdit: false
    }
  },
  methods: {
    showDetail(contact) {
     this.$emit('selected-contact',contact)
    },
   
  },
  computed: {
    checkAvatar(url){
      console.log(url)
      return false
    }
  }
};
</script>

<style lang="scss" scoped>
.cont {
  height: 80vh;
  overflow-y: scroll;
}
// .cont::-webkit-scrollbar {
//     margin-left: 1vw;
// }
.font {
  font-size: 1.8vh;
}
.item {
  background-color: rgb(238, 238, 238);
}

.item:hover {
  background-color: #1e62ab;
  .font {
    color: white;
  }
  .subtitle {
    color: white;
  }

}
</style>
