<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "TodoHead",
  props: {
    size: {
      type: Number,
      required: true,
    },
  },
  render(createElement) {
    const level = 6 - Math.round(this.size / (100 / 5));
    return createElement(
      "div",
      {
        style: {
          height: "4rem",
          verticalAlign: "middle",
        },
      },
      [createElement("h" + level, this.$slots.default)]
    );
  },
});
</script>
