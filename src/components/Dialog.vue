<template>
  <v-card class="container">
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-text>
      {{ message }}
    </v-card-text>
    <v-card-actions>
      <v-btn @click="$emit('confirm', true)">yes</v-btn>
      <v-btn @click="$emit('confirm', false)">no</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  mounted() {
    console.log(this.$props, this.$data);
  },
});
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
