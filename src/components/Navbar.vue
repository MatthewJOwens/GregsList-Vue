<template>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/cars" :class="{'router-link-exact-active': $route.name == 'CarDetails'}">Cars</router-link>|
    <router-link
      to="/houses"
      :class="{'router-link-exact-active': $route.name == 'HouseDetails'}"
    >Houses</router-link>|
    <router-link to="/about">About</router-link>
  </div>
</template>


<script>
export default {
  name: "navbar",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>