<template>
  <div class="dialog">
    <h1>dialogs</h1>
    <!-- <Dialog></Dialog> -->
    <button type="button" @click="show()">show</button>
  </div>
</template>

<script lang="ts">
import Dialog from "@/components/Dialog.vue";
import Vue from "vue";

export default Vue.extend({
  // components: {
  //   Dialog,
  // },
  methods: {
    show() {
      this.createComponent({
        title: "Confirm",
        message: "Are you sure you want to",
      }).then((confirm) => {
        console.log({ confirm });
      });
    },
    async createComponent(props: any): Promise<boolean> {
      const loadedComponent = Vue.extend(Dialog);
      const loaded = new loadedComponent({
        el: document.createElement("div"),
        propsData: props,
      });
      document.body.appendChild(loaded.$el);

      const confirm: boolean = await new Promise((resolve) =>
        loaded.$once("confirm", resolve)
      );
      document.body.removeChild(loaded.$el);
      return confirm;
    },
  },
});
</script>
