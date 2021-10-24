<template>
  <textarea v-model="text" placeholder="noteB" class="todo-note-b"></textarea>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "TodoNoteTextareaB",
  data() {
    return {
      text: "",
    };
  },
});
</script>

<style lang="scss" scoped>
.todo-note-b {
  border: 1px solid red;
}
</style>
