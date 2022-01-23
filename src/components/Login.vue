<template>
  <aside>
    <div>
      <h3>Sign in Anonymously</h3>
      <button class="button" @click="auth.signInAnonymously()">Sign In</button>
    </div>

    <hr />

    <div v-if="newUser">
      <h3>Sign up for a new account</h3>
      <a href="#" @click="newUser = false">Returning user?</a>
    </div>

    <div v-else>
      <h3>Sign in with email</h3>
      <a href="#" @click="newUser = true">New user?</a>
    </div>

    <p>
      <label for="email"></label><br />
      <input type="email" v-model="email" placeholder="email" class="input" />
    </p>

    <p>
      <label for="password"></label><br />
      <input type="password" v-model="password" placeholder="password" class="input" />
    </p>

    <p v-show="newUser">
      <button class="button is-info" :class="{ 'is-loading': loading }" @click="createUser()">
        Sign Up
      </button>
    </p>

    <p v-show="!newUser">
      <button class="button is-info" :class="{ 'is-loading': loading }" @click="signInWithEmail()">
        Log In
      </button>
    </p>

    <p class="has-text-danger" v-if="errorMessage">{{ errorMessage }}</p>

  </aside>

</template>

<script>

import { auth } from '../firebase';

export default {
  data() {
    return {
      auth,
      email: '',
      password: '',
      newUser: false,
      loading: false,
      errorMessage: '',
    }
  },
  methods: {
    async createUser() {
      try {
        this.loading = true;
        this.errorMessage = '';
        await auth.createWithEmailAndPassword(this.email, this.password);
      } catch (error) {
        this.errorMessage = error;
      }

      this.loading = false;
    },
    async signInWithEmail() {
      try {
        this.loading = true;
        this.errorMessage = '';
        await auth.signInWithEmailAndPassword(this.email, this.password);
      } catch (error) {
        this.errorMessage = error;
      }
    },
  }
}
</script>