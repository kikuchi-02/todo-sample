<template>
  <button :type="buttonType" @click="$emit('clicked', $event)">
    <slot>trigger</slot>
  </button>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "MyButton",
  props: {
    buttonType: {
      type: String,
      default: "button",
      required: false,
      validator(value) {
        return ["button", "submit", "reset"].includes(value);
      },
    },
  },
  data() {
    return {};
  },
});
</script>
