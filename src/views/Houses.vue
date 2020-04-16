<template>
  <div class="houses col-12">
    <!-- i will build a bunch of house components for each house -->
    <div class="row">
      <create-house></create-house>
      <div class="col-3"></div>
      <house v-for="house in houses" :houseData="house" :key="house._id"></house>
    </div>
  </div>
</template>

<script>
import House from "@/components/House.vue";
import CreateHouse from "../components/CreateHouse.vue";
export default {
  name: "houses",
  data() {
    return {};
  },
  computed: {
    houses() {
      return this.$store.state.houses;
    }
  },
  created() {
    this.$store.dispatch("getHouses");
  },
  methods: {},
  components: {
    House,
    CreateHouse
  }
};
</script>