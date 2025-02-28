<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await this.$axios.post('/api/login', {
          email: this.email,
          password: this.password
        });
        // Handle successful login
      } catch (error) {
        // Handle login error
      }
    }
  }
}
</script>
