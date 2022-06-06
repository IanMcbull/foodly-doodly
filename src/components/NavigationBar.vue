<template>
  <nav>
    <div class="nav-wrapper">
      <v-img src="@/assets/logo.png" class="logo" max-width="150px"></v-img>
      <router-link to="/recipes">RECIPES</router-link>
      <router-link to="/add">SUBMIT RECIPE</router-link>
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/contact">CONTACT</router-link>
    </div>
    <div class="user-auth-buttons">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn depressed color="#fff2e2" v-bind="attrs" v-on="on"
            >LOGIN</v-btn
          >
        </template>
        <v-card>
          <v-card-title class="text-h5">
            <span class="text-h5">Log in to your account</span>
          </v-card-title>
          <v-card-subtitle class="mt-3">
            Hey, please enter your email and password to login.
          </v-card-subtitle>
          <v-card-text>
            <v-container>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="email"
                      label="Email"
                      hint="example@gmail.com"
                      persistent-hint
                      type="email"
                      :rules="emailRules"
                      append-icon="mdi-map-marker"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="password"
                      label="Password"
                      type="password"
                      :rules="passwordRules"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
              <p class="mt-2">Having trouble signing in?</p>
              <v-btn
                block
                color="#ffc044"
                class="mt-2"
                elevation="4"
                @click="loginUser()"
                >LOGIN</v-btn
              >
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-btn
        @click="registerUser()"
        depressed
        elevation="4"
        min-width="150px"
        color="#ffc044"
        class="signup"
        >SIGNUP</v-btn
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  data: () => ({
    dialog: false,
    email: "",
    valid: true,
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => v.length >= 6 || "Password must be at least 6 characters",
    ],

    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
  methods: {
    validateInput() {
      this.$refs.form.validate();
    },
    loginUser() {
      if (!this.validateInput()) {
        console.log("You need to fill out all fields");
      }
      console.log("Login button pushed");
    },
    registerUser() {
      console.log("Register button pushed");
    },
  },
};
</script>
<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  width: 50%;
}
.nav-wrapper > a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}
a.router-link-active {
  border-bottom: 5px solid #ffc044;
}
.nav-wrapper > a:hover {
  border-bottom: 5px solid #ffc044;
}
.user-auth-buttons {
  display: flex;
  justify-content: space-between;
  width: 15%;
  padding: 0 1rem;
  font-weight: bolder;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
}
</style>
