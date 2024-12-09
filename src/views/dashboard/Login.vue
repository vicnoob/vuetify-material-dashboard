<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12" style="display: flex; justify-content: center;">
        <v-card style="min-width: 500px;">
          <v-card-title>Login for Admin</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="handleLogin">
              <v-text-field
                v-model="username"
                label="Username"
                outlined
                required
                prepend-inner-icon="mdi-account"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                outlined
                required
                prepend-inner-icon="mdi-lock"
              ></v-text-field>
              <v-btn type="submit" color="primary" block>Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      // Here we can just simulate login
      if (this.username && this.password) {
        this.$store.dispatch('login');  // Dispatch the login action
        this.$router.push('/');  // Redirect to a protected route
      } else {
        alert('Please enter both username and password');
      }
    },
  },
};
</script>