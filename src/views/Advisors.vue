<template>
  <div>
  <h2>Add an Advisor</h2>
  <div class="add">
  <div class="form">
    <input v-model="name" placeholder="Name">
    <input v-model="phone" placeholder="Phone">
    <input v-model="email" placeholder="Email">
    <input v-model="specialty" placeholder="Specialty">
    <input v-model="city" placeholder="City ST">
    <br>
    <button class="pure-button" @click="upload">Upload</button>
  </div>

  </div>
  <div class="heading">
  <h2>Edit/Delete an Advisor</h2>
  </div>
  <div class="edit">
  <div class="form">
    <input v-model="findName" placeholder="Search">
    <div class="suggestions" v-if="suggestions.length > 0">
      <div class="suggestion" v-for="s in suggestions" @click="selectItem(s)">{{s.name}}
      </div>
    </div>
  </div>
  <div class="upload" v-if="findItem">
    <input v-model="findItem.name">
    <p>Name</p>
    <input v-model="findItem.phone">
    <p>Phone</p>
    <input v-model="findItem.email">
    <p>Email</p>
    <input v-model="findItem.specialty">
    <p>Specialty</p>
    <input v-model="findItem.city">
    <p>City ST</p>

  </div>
  <div class="actions" v-if="findItem">
    <button @click="deleteItem(findItem)">Delete</button>
    <button @click="editItem(findItem)">Edit</button>
  </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      items: [],
      city: null,
      name: "",
      phone: "",
      email: "",
      specialty: "",
      addItem: null,
      findName: "",
      findItem: null,
    }
  },
  components: {
    HelloWorld
  },
  computed: {
    user() {
      return this.$store.state.user;d
    },
    advisors() {
      return this.$store.state.advisors;
    },
    suggestions() {
      return this.items.filter(item => item.name.toLowerCase().startsWith(this.findName.toLowerCase()));
    }
  },
  methods: {
  async created() {
    await this.$store.dispatch("getUser");
    await this.$store.dispatch("getMyPhotos");
  },
  async upload() {
    try {
      console.log("uploading, avisors.vue");
      this.error = await this.$store.dispatch("upload", {
        name: this.name,
        phone: this.phone,
        email: this.email,
        specialty: this.specialty,
        city: this.city,
      });
      if (!this.error) {
        this.name = '';
        this.phone = '';
        this.email = '';
        this.specialty = '';
        this.city = '';
        this.$emit('uploadFinished');
      }
    } catch (error) {
      console.log(error);
    }
  },
}
}
</script>
