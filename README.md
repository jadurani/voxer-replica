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

#### Lesson 4: Your First Component

- Install vue router
  - `npm i vue-router`
- I downgraded firebase version from v9 to v7 for Fireship's tutorial to work
- Updated main.js to include set up for router
  - import VueRouter
  - Vue.use(VueRouter)
  - Include in Vue app initialization
  - Declare routes

#### Lesson 5: Anonymous Auth

  - Basic user authentication with Firebase
  - `auth.signInAnonymously()`
    - creates a user record that is now logged in to this app

#### Lesson 6: Realtime Auth State

- Use Vue Composition API
  - API that makes it easier to manage realtime streams like the user authentication state
  - install the composition api
    - `npm i @vue/composition-api`
  - `ref`
    - a way to create a reactive value; whenever this value changes, vue will react by rerendering the UI
  - Create a user component that gives the current auth state; better pattern than checking the auth state in every single page
  - `setup` and ` destroyed` lifecycle hooks are used
  - `slot` prop maximizes the reusability of a component by making the property of a chilt component available to the parent component

#### Lesson 7: User Profile

- Here we just worked with what we already know

#### Lesson 8: Email Password Authentication

- We use 2-way data-binding via `v-model`

#### Lesson 9: Create Chat Rooms

- We'll be using firbase's cloud firestore as our database.
- Sample data model

```
- chats/
  |- <document_id>/
  |  |- createdAt
  |  |- members/
  |  |  |- 0: <document_id>
  |  |- owner: <document_id>
  |- <document_id>/
  |  |- createdAt
  |  |- members/
  |  |  |- 0: <document_id>
  |  |- owner: <document_id>
```

#### Lesson 10: Query Chat Rooms

- Use a vuefire functionality `firestore()` within a component that manages the real-time state of the data within firestore

#### Lesson 11: Dynamic Routing

- Target: `example.com/chats/:id`
- Used `computed`
- $route is built-in to the vue framework and gives us access to route params
- Used named components for the routes