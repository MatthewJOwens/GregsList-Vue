<template>
  <div class="houses col-12">
    <!-- i will build a bunch of house components for each house -->
    <div class="row">
      <create-house></create-house>
      <div class="col-3"></div>
      <house v-for="house in houses" :houseData="house"></house>
      <!-- house deetz go here -->
    </div>
  </div>
</template>

<script>
  import House from './House.vue'
  import CreateHouse from './CreateHouse.vue'
  export default {
    name: 'houses',
    data() {
      return {

      }
    },
    computed: {
      houses() {
        return this.$store.state.houses
      }
    },
    created() {
      this.$store.dispatch("getHouses")
    },
    methods: {},
    components: {
      House,
      CreateHouse
    }
  }
</script>