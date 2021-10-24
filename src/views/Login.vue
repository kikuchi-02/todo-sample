<template>
  <form @submit.prevent="submit" class="form">
    <div class="field">
      <div>
        <label for="email">Email:</label>
      </div>
      <div>
        <input v-model="email" class="email-input" type="email" />
      </div>
    </div>
    <div class="field">
      <div>
        <label for="password">Password:</label>
      </div>
      <div>
        <input v-model="password" class="password-input" type="password" />
      </div>
    </div>
    <div class="submit">
      <button type="submit" class="submit-button">Submit</button>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async submit() {
      await this.$store.dispatch("login/login", {
        email: this.email,
        password: this.password,
      });
      this.$router.push("/");
    },
  },
});
</script>

<style lang="scss" scoped>
.form {
  width: 600px;
  margin: 20px auto;
}

.field {
  text-align: left;
  margin-bottom: 20px;
}

.email-input {
  width: 100%;
}
.password-input {
  width: 100%;
}

.submit-button {
  width: 60%;
}
</style>
