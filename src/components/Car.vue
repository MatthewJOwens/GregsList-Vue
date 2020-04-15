<template>
  <div class="car border col-3">
    <img :src="carData.imgUrl" alt class="img-fluid" />
    <h5>{{carData.make}}</h5>
    <h5>{{carData.model}}</h5>
    <p>${{carData.price}}</p>
    <p>Year: {{carData.year}}</p>
    <button class="btn btn-danger mb-1" @click="deleteCar()">Delete</button>
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
    deleteCar() {
      this.$store.dispatch("deleteCar", this.carData._id);
    }
  }
};
</script>

<style scoped>
.car {
  outline: 1px solid black;
}
</style>