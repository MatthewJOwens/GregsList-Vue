<template>
  <div class="carDetails">
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
  name: "carDetails",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getSingleCar", this.$route.params.carId);
  },
  computed: {
    carData() {
      return this.$store.state.activeCar;
    }
  },
  methods: {
    deleteCar() {
      this.$router.push({ name: "Cars" });
      this.$store.dispatch("deleteCar", this.carData._id);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>