<template>
  <v-card>
    <div v-if="!showEdit">
      <div class="px-4 py-5 text-center">
        <v-avatar size="20vw">
          <v-img
            contain
            aspect-ratio="2"
            class="circle"
            :src="selectedData.avatar"
          />
        </v-avatar>
      </div>

      <v-card-title class="justify-center">
        {{ selectedData.name.toUpperCase() }}
      </v-card-title>

      <v-divider class="mx-4"></v-divider>

      <v-card-text class="text--primary ">
        <div class="my-4">
          <v-icon left="">mdi-cellphone-basic</v-icon>
          +62{{ selectedData.phoneNumber }}
        </div>

        <div class="my-4">
          <v-icon left="">mdi-email</v-icon>
          {{ selectedData.email }}
        </div>

        <div class="my-4">
          <v-icon left="">mdi-home-map-marker</v-icon>
          {{ selectedData.address }}
        </div>
      </v-card-text>

      <v-card-actions class="justify-end">
        <v-btn rounded color="primary" @click="showEdit = !showEdit">
          <v-icon left>mdi-account-edit</v-icon>
          edit</v-btn
        >
        <v-btn outlined rounded color="error" @click="deleteData">
          <v-icon left>mdi-delete-circle</v-icon>
          <span>delete</span></v-btn
        >
      </v-card-actions>
    </div>

    <div v-if="showEdit">
      <EditForm
        :selected="selectedData"
        @close-form="closeForm"
        @new-edit-data="newData"
      />
    </div>
  </v-card>
</template>

<script>
import EditForm from "@/components/EditForm";

export default {
  name: "DetailList",
  props: ["selected"],
  components: {
    EditForm,
  },
  data() {
    return {
      showEdit: false,
      selectedData: this.selected,
    };
  },
  methods: {
    closeForm() {
      this.showEdit = false;
    },
    newData(data) {
      this.selectedData = data;
    },
    deleteData() {
      this.$swal({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          this.$axios.delete(`/contact/${this.selectedData._id}`).then(() => {
            this.$store.dispatch("fecthData");
            this.$emit("success-delete");
            this.$swal("Deleted!", "Your file has been deleted.", "success");
          });
        }
      });
    },
  },
  watch: {
    selected: function() {
      this.selectedData = {
        _id: this.selected._id,
        name: this.selected.name,
        phoneNumber: `0${this.selected.phoneNumber}`,
        email: this.selected.email,
        address: this.selected.address,
        avatar: this.selected.avatar,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.circle {
  border-radius: 50%;
}
.action {
  display: flex;
  justify-content: end;
}
</style>
