<template>
  <div>
    <h3>Home</h3>

    <User v-slot:user="{ user }">
      <div v-if="user">
        <UserProfile :user="user" />
        <ChatList :uid="user.uid" />
      </div>
      <Login v-else />
    </User>
  </div>
</template>

<script>
import ChatList from '../components/ChatList.vue';

import Login from '../components/Login.vue';
import User from '../components/User.vue';
import UserProfile from '../components/UserProfile.vue';

export default {
  components: { Login, User, UserProfile, ChatList }
}
</script>