# Voxer Replica

This is an exercise in learning VueJS by building a real-time voice chat app like [Voxer](https://www.voxer.com/) following a tutorial on [fireship.io](https://fireship.io/courses/vue/intro-vuefirebase/). We'll be using firebase as the backend for this project.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Notes

#### Lesson 2: Vue Setup

- We're using node version 10 (see .nvmrc)
- Runing `vue ui` would open the vue project manager at localhost:8000
- We're using Vue v2.6.11 in this project

#### Lesson 3: Firebase Setup

- Firebase is a collection of SDKs, once of which is JS.
- We'll be using the following firebase services
  - *auth* for users
  - *firestore* for a database
  - *storage* for raw audio files
- Vuefire and Vuexfire
  - `npm i vuefire firebase`