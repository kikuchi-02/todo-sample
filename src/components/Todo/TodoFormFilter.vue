<template>
  <div class="todo-form-filter">
    <form @submit.prevent="addNewKeyword">
      <div class="form__label">
        <label for="filter-task">Filter tasks</label>
      </div>
      <div class="form__field">
        <input v-model="keyword" placeholder="E.g. cat" class="form__input" />
        <my-button buttonType="submit">
          <slot name="trigger-submit">submit</slot>
        </my-button>
      </div>
    </form>
    <ul class="keyword-list">
      <li v-for="k in keywords" :key="k" class="keyword-item">
        <button @click="remove(k)" class="keyword-item__button">
          {{ k }} | x
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import MyButton from "@/components/MyButton.vue";

export default Vue.extend({
  name: "TodoFormFilter",
  components: { MyButton },
  model: {
    prop: "keywords",
    event: "change",
  },
  props: {
    keywords: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    addNewKeyword(): void {
      if (this.keyword == "" || this.keywords.includes(this.keyword)) {
        return;
      }
      this.keywords.push(this.keyword);
      this.keyword = "";
      this.$emit("change", this.keywords);
    },
    remove(k: string) {
      const idx = this.keywords.indexOf(k);
      if (idx >= 0) {
        this.keywords.splice(idx, 1);
        this.$emit("change", this.keywords);
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

.keyword-list {
  display: flex;
  list-style-type: none;
  padding-left: 0px;

  .keyword-item {
    margin-right: 10px;
    &__button {
      border-radius: 50px;
    }
  }
}
// }
</style>
