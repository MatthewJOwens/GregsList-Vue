<template>
  <div class="house border col-3">
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
  name: "house",
  props: ["houseData"],
  data() {
    return {};
  },
  methods: {
    deleteHouse() {
      this.$store.dispatch("deleteHouse", this.houseData._id);
    }
  }
};
</script>

<style scoped>
.house {
  outline: 1px solid black;
}
</style>