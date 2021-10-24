<template>
  <div class="todo-form">
    <form @submit.prevent="addNewTask">
      <div class="form__label">
        <label for="new-task">Add new task</label>
      </div>
      <div class="form__field">
        <input
          v-model="newTask"
          placeholder="E.g. Feed the cat"
          class="form__input"
        />

        <my-button buttonType="submit">
          <slot name="trigger-submit">submit</slot>
        </my-button>
        <my-button buttonType="reset">
          <slot name="trigger-reset" :count="newTask.length">reset</slot>
        </my-button>
      </div>
    </form>
  </div>
</template>

<script>
import MyButton from "@/components/MyButton.vue";
import Vue from "vue";

export default Vue.extend({
  name: "TodoForm",
  components: { MyButton },
  data() {
    return { newTask: "" };
  },
  methods: {
    addNewTask() {
      if (this.newTask) {
        this.$emit("add-new-task", this.newTask);
        this.newTask = "";
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.form {
  &__label {
    text-align: left;
  }
  &__field {
    display: flex;
    .form__input {
      flex: 1;
      height: 20px;
    }
  }
}
</style>
