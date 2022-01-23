<template>
  <div>
    Logged-in as {{ user.uid }}
    <button @click="signOut">
      Sign Out
    </button>
  </div>
</template>

<script>
import { auth } from '../firebase'

export default {
  methods: {
    signOut: () => {
      auth.signOut();
    }
  },
  props: ['user']
}
</script>