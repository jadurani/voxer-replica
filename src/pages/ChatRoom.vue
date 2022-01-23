<template>
  <main>
    <h3>Welcome to ChatRoom {{ chatId }}</h3>
    <router-link to="/">Back</router-link>
  </main>
</template>

<script>
export default {
  computed: {
    chatId() {
      return this.$route.params.id;
    }
  }
}
</script>