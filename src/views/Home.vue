<template>
  <div class="home container-fluid">
    <!-- cars -->
    <div class="row">
      <Cars></Cars>
    </div>
    <!-- houses -->
    <!-- jerbs -->
    <!-- <div class="row">
      <Jobs></Jobs>
    </div>-->
  </div>
</template>

<script>
import Cars from "../components/Cars.vue";

export default {
  name: "Home",
  components: { Cars }
};
</script>
