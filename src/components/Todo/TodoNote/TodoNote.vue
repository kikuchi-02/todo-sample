<template>
  <div class="todo-note">
    <div class="button-wrapper">
      <button type="button" @click="changeNote" class="button">
        change Note
      </button>
    </div>
    <div class="textarea-wrapper">
      <transition name="note-fade" mode="out-in" @after-enter="focusNote">
        <keep-alive>
          <component
            :is="targetNote"
            ref="noteArea"
            class="textarea"
          ></component>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import TodoNoteTextarea from "@/components/Todo/TodoNote/TodoNoteTextarea.vue";
import TodoNoteTextareaB from "@/components/Todo/TodoNote/TodoNoteTextareaB.vue";
import Vue from "vue";

export default Vue.extend({
  name: "TodoNote",
  components: {
    "note-a": TodoNoteTextarea,
    "note-b": TodoNoteTextareaB,
  },
  data() {
    return {
      targetNote: "note-a",
    };
  },
  methods: {
    changeNote(): void {
      const notes = ["note-a", "note-b"];
      let idx = notes.indexOf(this.targetNote);
      if (idx >= notes.length - 1) {
        idx = -1;
      }
      this.targetNote = notes[idx + 1];

      // this.$nextTick(() => {
      //     const cmp = this.$refs.noteArea as Vue;
      //     (cmp.$el as HTMLTextAreaElement).focus();
      // });
    },
    focusNote(): void {
      const cmp = this.$refs.noteArea as Vue;
      (cmp.$el as HTMLTextAreaElement).focus();
    },
  },
});
</script>

<style lang="scss" scoped>
.button-wrapper {
  margin-bottom: 20px;
  .button {
    width: 100%;
  }
}
.textarea-wrapper {
  .textarea {
    width: 100%;
    box-sizing: border-box;
    height: 300px;
  }
}

.note-fade-enter-active,
.note-fade-leave-active {
  transition: opacity 0.3s ease;
}
.note-fade-enter,
.note-fade-leave-to {
  opacity: 0;
}
</style>
