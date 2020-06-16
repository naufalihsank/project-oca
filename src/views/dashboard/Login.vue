<template>
  <div class="login">
    <div class="column-left">
      <div style="margin: 25% 20% 0% 20%">
        <span class="text-title">Welcome back, Please login into your account</span>
        <br>
        <br>
        <span class="login-title">Username/Email</span>
        <v-text-field
          outlined
          placeholder="Username/Email"
        />
        <span class="login-title">Password</span>
        <v-text-field
          outlined
          type="password"
          name="input-10-2"
          placeholder="Password"
          class="input-group--focused"
        />
        <v-btn
          class="font-button"
          color="#ed1260"
          width="100%"
          @click="signIn()"
        >
          sign in
        </v-btn>
      </div>
    </div>
    <div class="column-right">
      <v-img
        src="../../../public/logo.svg"
        style="height: 100vh"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LoginPage',
    data () {
      return {
        show2: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
      }
    },
    methods: {
      signIn () {
        this.$router.push('/dashboard')
      },
    },
  }
</script>

<style scoped>
  html, body {
    height: 100%;
  }
  .background-color {
    background-color: #ed1260;
  }
  .text-title {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15.3571px;
    line-height: 18px;
  }
  .login-title {
    font-family: 'Lato', sans-serif;
    font-style: italic;
    font-weight: normal;
    font-size: 11.9444px;
    line-height: 14px;
    color: #9A9A9A;
  }
  .column-left {
    width: 40%;
    height: 100%;
    position: absolute;
    background: #FAFAFA;
  }
  .column-right {
    background: #ed1260;
    width: 60%;
    height: 100%;
    float: right;
  }
  .font-button {
    font-family: 'Lato', sans-serif;
    text-transform: lowercase;
    font-weight: bold;
  }
</style>
