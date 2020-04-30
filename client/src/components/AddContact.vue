<template>
  <v-dialog v-model="modal" persistent max-width="30vw">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" rounded>
        <v-icon left>mdi-account-plus</v-icon>
        <span>add new</span>
      </v-btn>
    </template>
    <v-card>
      <v-list-item-title class="headline mb-1 pa-5">Add New Contact</v-list-item-title>
      <div class="pa-5">
        <v-form ref="form" lazy-validation>
          <v-text-field v-model="name" :rules="nameRules" label="Name" required></v-text-field>

          <v-text-field v-model="phone" :rules="phoneRules" label="Phone Number" required></v-text-field>

          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

          <v-text-field v-model="avatar" label="Avatar" required></v-text-field>
          <v-text-field v-model="address" label="Address" required></v-text-field>

          <v-card-actions class="justify-end">
            <v-btn rounded color="primary" @click="submit">
              <v-icon left>mdi-checkbox-marked-circle</v-icon>Add New
            </v-btn>
            <v-btn outlined rounded color="error" @click="modal = false">
              <v-icon left>mdi-close</v-icon>
            </v-btn>
          </v-card-actions>
        </v-form>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "AddContact",
  data() {
    return {
      modal: false,
      name: null,
      phone: "",
      email: "",
      address: "",
      avatar: "",

      nameRules: [(v) => !!v || "Name is required"],

      phoneRules: [(v) => !!v || "Phone Number is required"],

      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],

    };
  },
  methods: {
    submit() {
      this.$axios
        .post("/contact", {
          name: this.name,
          phoneNumber: this.phone,
          email: this.email,
          address: this.address,
          avatar: this.avatar,
        })
        .then(() => {
          this.$store.dispatch("fecthData");
          this.modal = !this.modal
          this.$swal("New Contact", "Succesfuly add new contact", "success");
        });
    },
    
  },
};
</script>

<style></style>
