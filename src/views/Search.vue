<template>


  <div class="container">

      <div class="row">
        <div class="advisorSearch">
          <button class="pure-button" @click="searchClick" v-if="!searched">Find an advisor near me</button>
        </div>
        <div v-if="searched">
          <div class="form" id="indexsug">
            <input size="8" v-model="findName" placeholder="Refine search" @click="searchClick">
            <div class="suggestions">
              <div class="suggestion" v-for="item in suggestions" @click="selectItem(item)">{{item.city}}
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg">
          <div class="upload" v-if="searched">
            <table>
              <tr>
                <th>Name</th>
                <th>Specialty</th>
                <th>Phone</th>
                <th>E-mail</th>
              </tr>
              <tr v-for="item in suggestions">
                <td> {{item.name}}
                </td>
                <td>
                  {{item.specialty}}
                </td>
                <td>
                  {{item.phone}}
                </td>
                <td>
                  {{item.email}}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "search",
  data() {
    return {
      numAdvisors: 3,
      searchInput: '',
      searched: false,
      noAdvisors: false,
      noAdvisorMessage: "There don't seem to be any advisors in that city!",
      advisorsSearched: [],
      findName: "",
      findItem: null,
    }
  },
  components: {
  },
  computed: {
    user() {
      return this.$store.state.user;d
    },
    items() {
      return this.$store.state.items;
    },
    suggestions() {
      return this.items.filter(item => item.name.toLowerCase().startsWith(this.findName.toLowerCase()));
    }
  },
  methods: {
    selectItem(item) {
      this.findPhone = "";
      this.findName = "";
      this.findItem = item;
      this.findCity = "";
      this.findEmail = "";
      this.findSpecialty = "";
    },
    searchClick() {
      this.searched = true;
    },
  },
  async created() {
    await this.$store.dispatch("getUser");
    await this.$store.dispatch("getItems");
  },
  }
</script>
