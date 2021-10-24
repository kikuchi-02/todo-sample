<template>
  <li class="wrapper" v-pseudo-lazy-load>
    <div class="input-wrapper">
      <input v-model="task.completed" type="checkbox" />
    </div>
    <div class="title">
      {{ task.title }}
    </div>
    <div class="delete">
      <button @click="$emit('remove')" class="delete-button">x</button>
    </div>
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Task } from "@/models";
export default Vue.extend({
  name: "TodoListItem",
  props: {
    task: {
      type: Object as PropType<Task>,
    },
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.wrapper {
  text-align: left;
  display: flex;
  height: 30px;
  align-items: center;
}

.title {
  &:hover {
    border-bottom: 1px solid red;
  }
}

.input-wrapper {
  padding: 3px;
}

.delete {
  margin-left: auto;
}
</style>
