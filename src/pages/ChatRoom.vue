<template>
  <main>
    <h3>Welcome to ChatRoom {{ chatId }}</h3>
    <router-link to="/">Back</router-link>

    <User #user="{ user }">
      <ul>
        <li v-for="message in messages" :key="message.id">
          <ChatMessage
            :message="message"
            owner="user.uid === message.sender"></ChatMessage>
        </li>
      </ul>

      <input type="text" class="input" v-model="newMessageText"/>

      <button
        :disabled="!newMessageText || loading"
        class="button is-success"
        type="text"
        @click="addMessage(user.uid)">
        Send
      </button>
    </User>
  </main>
</template>

<script>

import User from '../components/User.vue';
import ChatMessage from '../components/ChatMessage.vue';
import { db } from '../firebase';

export default {
  components: {
    User,
    ChatMessage
  },
  data() {
    return {
      newMessageText: '',
      loading: false,
      messages: [],
    }
  },
  computed: {
    chatId() {
      return this.$route.params.id;
    },
    messagesCollection() {
      return db.doc(`chats/${this.chatId}`).collection('messages');
    }
  },
  firestore() {
    return {
      messages: this.messagesCollection.orderBy('createdAt').limitToLast(10)
    }
  },
  methods: {
    async addMessage(uid) {
      this.loading = true;
      const { id: messageId } = this.messagesCollection.doc();

      await this.messagesCollection.doc(messageId).set({
        text: this.newMessageText,
        sender: uid,
        createdAt: Date.now()
      });
      this.loading = false;
      this.newMessageText = '';
    }
  }
}
</script>