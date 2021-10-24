<template>
  <div class="container">
    <div class="counter">
      filtered: {{ filtertedTask.length }} / {{ tasks.length }}
    </div>
    <transition-group
      name="list"
      tag="ul"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <li
        is="todo-list-item"
        v-for="task in filtertedTask"
        :task="task"
        :key="task.id"
        class="item"
        @remove="remove(task)"
      ></li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Task } from "@/models";
import TodoListItem from "./TodoListItem.vue";
import Velocity from "velocity-animate";

export default Vue.extend({
  name: "TodoList",
  components: {
    TodoListItem,
  },
  model: {
    prop: "tasks",
    event: "change",
  },
  props: {
    tasks: {
      type: Array as PropType<Task[]>,
      required: true,
    },
    filterKeywords: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    filtertedTask(): Task[] {
      if (this.filterKeywords.length == 0) {
        return this.tasks;
      }
      return this.tasks.filter((t) =>
        this.filterKeywords.every((keyword) =>
          t.title.toLowerCase().includes(keyword)
        )
      );
    },
  },
  methods: {
    beforeEnter(el: HTMLUListElement) {
      el.style.opacity = "0";
      el.style.height = "0";
    },
    enter(el: HTMLLIElement, done: () => void) {
      Velocity(el, { opacity: 1, height: "1.6em" }, { complete: done });
    },
    leave(el: HTMLLIElement, done: () => void) {
      Velocity(el, { opacity: 0, height: 0 }, { complete: done });
    },
    remove(task: Task): void {
      const idx = this.tasks.findIndex((t) => t.id == task.id);
      if (idx >= 0) {
        this.tasks.splice(idx, 1);
        this.$emit("change", this.tasks);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.counter {
  width: 200px;
  margin-left: auto;
}

.list {
  list-style-type: none;
}
</style>
