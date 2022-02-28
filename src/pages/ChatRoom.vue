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

      <hr />

      <h5>Record Audio</h5>

      <button v-if="!recorder" @click="record()"> Record </button>
      <button v-else @click="stop()"> Stop </button>
      <audio v-if="newAudio" :src="newAudioURL" controls></audio>
      <hr />

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
      newAudio: null,
      recorder: null
    }
  },
  computed: {
    chatId() {
      return this.$route.params.id;
    },
    messagesCollection() {
      return db.doc(`chats/${this.chatId}`).collection('messages');
    },
    newAudioURL() {
      return URL.createObjectURL(this.newAudio);
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
    },
    async record() {
      this.newAudio = null;
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
      });

      const options = { mimeType: "audio/webm" };
      const recordedChunks = [];

      this.recorder = new MediaRecorder(stream, options);
      this.recorder.addEventListener("dataavailable", e => {
        if (e.data.size > 0) {
          recordedChunks.push(e.data);
        }
      });

      this.recorder.addEventListener("stop", () => {
        this.newAudio = new Blob(recordedChunks);
        console.log(this.newAudio);
      });

      this.recorder.start();
    },
    async stop() {
      this.recorder.stop();
      this.recorder = null;
    }
  }
}
</script>