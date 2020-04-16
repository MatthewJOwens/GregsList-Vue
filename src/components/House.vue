<template>
  <div class="house border col-3" @click="houseDetails()">
    <img class="img-fluid" :src="houseData.imgUrl" alt />
    <h5>{{houseData.bedrooms}} Bed, {{houseData.bathrooms}} Bath</h5>
    <p>${{houseData.price}}</p>
  </div>
</template>

<script>
export default {
  name: "house",
  props: ["houseData"],
  data() {
    return {};
  },
  methods: {
    houseDetails() {
      this.$store.commit("setActiveHouse", {});
      this.$router.push({
        name: "HouseDetails",
        params: { houseId: this.houseData._id }
      });
    }
  }
};
</script>

<style scoped>
.house {
  outline: 1px solid black;
}
</style>