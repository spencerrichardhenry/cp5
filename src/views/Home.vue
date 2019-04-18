<template>
  <div>
    <div v-if="user">
        <button class="pure-button" id="login" @click="logout" type="button"> Logout </button>
      <div class="header">
        <div>
          <h1>Welcome, {{user.name}}</h1>
        </div>
        <div>
          <p>
          </p>
        </div>
      </div>

<router-link to="/search" class="pure-button">Find an advisor near you</router-link><br>
  <router-link to="/advisors" class="pure-button">Add, remove, or edit the Advisor list</router-link>
</div>

    <div v-else>
      <p>If you would like to view or add advisors, please register for an account or login.</p>
      <router-link to="/register" class="pure-button">Register</router-link> or
      <router-link to="/login" class="pure-button">Login</router-link>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import EscapeEvent from "@/components/EscapeEvent.vue";

export default {
  name: 'mypage',
  data() {
    return {
      show: false,
    }
  },
  components: {
    EscapeEvent,
  },
  computed: {
    user() {
      return this.$store.state.user;d
    },
  },
methods: {
  async logout() {
    try {
      this.error = await this.$store.dispatch("logout");
    } catch (error) {
      console.log(error);
    }
  },
  async created() {
    await this.$store.dispatch("getUser");
  },
  escape() {
 this.show = false;
},
}
}
</script>

<style scoped>
.header {
  display: flex;
}

.header a {
  padding-left: 50px;
  color: #222;
  font-size: 2em;
}

.header svg {
  margin-top: 12px;
}

#login {
  float: right;
}
</style>
