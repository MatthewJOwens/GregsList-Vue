<template>
  <div class="car border col-3" @click="carDetails()">
    <img :src="carData.imgUrl" alt class="img-fluid" />
    <h5>{{carData.year}} {{carData.make}} {{carData.model}}</h5>
    <p>${{carData.price}}</p>
  </div>
</template>

<script>
export default {
  name: "car",
  props: ["carData"],
  data() {
    return {};
  },
  methods: {
    carDetails(id) {
      this.$store.commit("setActiveCar", {});
      this.$router.push({
        name: "CarDetails",
        params: { carId: this.carData._id }
      });
    }
  }
};
</script>

<style scoped>
.car {
  outline: 1px solid black;
}
</style>