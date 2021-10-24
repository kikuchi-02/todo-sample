<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-if="show" v-html="xssHtml" style="width: 500px; height: 500px"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  beforeRouteEnter(to, from, next) {
    console.log({ to: to.fullPath, from: from.fullPath });
    // 弾けない。
    // next((vm) => {
    //   console.log(vm.$store.state.isAdmin);
    //   if (vm.$store.state.isAdmin) {
    //     next();
    //   } else {
    //     next(false);
    //   }
    // });
    import("@/store/index").then((storeModule) => {
      if (storeModule.default.state.login.isAdmin) {
        next();
      } else {
        next(false);
        storeModule.default.dispatch("snackbar/showSnackbar", {
          title: "Failed",
          message: "You must login",
        });
      }
    });
  },
  data() {
    return {
      xssHtml:
        '<img src="https://jp.vuejs.org/images/logo.svg" onload="alert(\'Hello, here is xss demo \')" >',
      show: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 2000);
  },
});
</script>
