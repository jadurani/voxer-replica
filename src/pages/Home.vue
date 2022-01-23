<template>
  <div>
    <h3>Home</h3>

    <User v-slot:user="{ user }">
      <div v-if="user">
        Logged-in as {{ user.uid }}

      </div>
      <Login v-else />
    </User>
  </div>
</template>

<script>

import Login from './Login.vue';
import User from './User.vue';

export default {
  components: { Login, User }
}
</script>