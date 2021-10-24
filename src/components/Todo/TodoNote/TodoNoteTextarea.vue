<template>
  <textarea v-model="text" placeholder="note"></textarea>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TodoNoteTextarea",
  data() {
    return {
      text: "",
    };
  },
});
</script>
