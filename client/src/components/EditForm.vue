<template>
  <div class="pa-5">
    <v-form ref="form" lazy-validation>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="phone"
        :rules="phoneRules"
        label="Phone Number"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field v-model="avatar" label="Avatar" required></v-text-field>

      <v-text-field v-model="address" label="Address" required></v-text-field>
      <v-card-actions class="justify-end">
        <v-btn rounded color="primary" @click="submit">
          <v-icon left>mdi-checkbox-marked-circle</v-icon>
          OK</v-btn
        >
        <v-btn outlined rounded color="error" @click="closeEdit">
          <v-icon left>mdi-close</v-icon>
        </v-btn>
      </v-card-actions>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EditForm",
  props: ["selected"],
  data() {
    return {
      showEdit: false,
      id: this.selected._id,
      name: this.selected.name,
      nameRules: [(v) => !!v || "Name is required"],
      phone: this.selected.phoneNumber,
      phoneRules: [(v) => !!v || "Phone Number is required"],
      email: this.selected.email,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      avatar: this.selected.avatar,
      address: this.selected.address,
    };
  },
  methods: {
    submit() {
      const willUpdate = {
        name: this.name,
        phoneNumber: this.phone,
        email: this.email,
        avatar: this.avatar,
        address: this.address,
      };
      axios
        .put(`http://localhost:3000/contact/${this.id}`, willUpdate)
        .then(() => {
          this.$store.dispatch("fecthData");
          this.closeEdit();
          this.$emit("new-edit-data", willUpdate);
          this.$swal("Update", "Succesfuly update contact", "success");
        });
    },
    closeEdit() {
      this.$emit("close-form");
    },
  },
};
</script>

<style></style>
