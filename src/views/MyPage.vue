<template>
</template>




 <script>
 import EscapeEvent from '@/components/EscapeEvent.vue'


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
   },
   async created() {
     await this.$store.dispatch("getUser");
   },
   escape() {
  this.show = false;
},
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
</style>
