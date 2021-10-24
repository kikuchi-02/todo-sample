<template>
  <div class="todo">
    <h1>{{ new Date() | date }}</h1>
    <todo-head :size="headRange">TODO LIST IS HERE</todo-head>
    <input type="range" v-model.number="headRange" />
    <todo-form class="form" @add-new-task="tasks.push($event)">
      <template #trigger-submit>submit</template>
      <template #trigger-reset="{ count }">reset ({{ count }})</template>
    </todo-form>
    <todo-form-filter
      class="form-filter"
      v-model="filterKeywords"
    ></todo-form-filter>
    <div class="list-wrapper">
      <todo-note class="note"></todo-note>
      <todo-list
        v-model="tasks"
        :filterKeywords="filterKeywords"
        class="list"
      ></todo-list>
    </div>
  </div>
</template>

<script lang="ts">
import { Task } from "@/models";
import TodoForm from "@/components/Todo/TodoForm.vue";
import TodoFormFilter from "@/components/Todo/TodoFormFilter.vue";
import TodoHead from "@/components/Todo/TodoHead.vue";
import TodoList from "@/components/Todo/TodoList.vue";
import TodoNote from "@/components/Todo/TodoNote/TodoNote.vue";
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  components: { TodoList, TodoForm, TodoFormFilter, TodoNote, TodoHead },
  data() {
    return {
      tasks: [] as Task[],
      filterKeywords: [] as string[],
      headRange: 50,
    };
  },
  created() {
    axios
      .get<Task[]>("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        this.tasks = response.data;
      });
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.todo {
  max-width: 1080px;
  margin: 10px auto;

  .form {
    margin-bottom: 10px;
    width: 600px;
  }
  .form-filter {
    margin-bottom: 10px;
    width: 600px;
  }

  .list-wrapper {
    display: flex;

    .note {
      width: 200px;
    }

    .list {
      flex: 1;
    }
  }
}
</style>
