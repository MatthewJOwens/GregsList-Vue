<template>
  <div class="houseDetails border col-12">
    <img class="img-fluid" :src="houseData.imgUrl" alt />
    <h5>{{houseData.bedrooms}} Bed</h5>
    <h5>{{houseData.bathrooms}} Bath</h5>
    <h6>{{houseData.levels}} Level</h6>
    <p>${{houseData.price}}</p>
    <p>Built: {{houseData.year}}</p>
    <p>{{houseData.description}}</p>
    <button class="btn btn-danger mb-1" @click="deleteHouse()">Delete</button>
  </div>
</template>


<script>
export default {
  name: "houseDetails",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getSingleHouse", this.$route.params.houseId);
  },
  computed: {
    houseData() {
      return this.$store.state.activeHouse;
    }
  },
  methods: {
    deleteHouse() {
      this.$router.push({ name: "Houses" });
      this.$store.dispatch("deleteHouse", this.houseData._id);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>