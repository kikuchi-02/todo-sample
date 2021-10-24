<template>
  <transition name="fade">
    <div v-if="snackbar.active" class="wrapper">
      <span class="title">{{ snackbar.title }}</span> | {{ snackbar.message }}
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "Snackbar",
  computed: mapState({ snackbar: (state: any) => state.snackbar.snackbar }),
});
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;
  background-color: #42b983;
  padding: 5px 10px;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.title {
  font-weight: bold;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
