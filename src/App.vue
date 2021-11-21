<template>
  <v-app id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/todo">Todo</router-link> |
      <router-link to="/dialogs">Dialog</router-link>
    </div>
    <div class="login-wrapper">
      <router-link v-if="!$store.state.login.isAdmin" to="/login"
        >Login</router-link
      >
      <button v-else @click="$store.dispatch('login/logout')">Logout</button>
    </div>
    <transition name="slide-fade">
      <router-view />
    </transition>
    <snackbar></snackbar>
  </v-app>
</template>

<script lang="ts">
import Snackbar from "@/components/Snackbar.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    Snackbar,
  },
});
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.login-wrapper {
  max-width: 1080px;
  text-align: right;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
