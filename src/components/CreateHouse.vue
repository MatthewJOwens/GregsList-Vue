<template>
  <div class="create-house border offset-3 col-6 my-3">
    <form @submit.prevent="createHouse()">
      <div class="form-group">
        <label for="bedrooms">Bedrooms</label>
        <input
          type="text"
          name="bedrooms"
          id="bedrooms"
          class="form-control"
          placeholder="Enter # of bedrooms"
        />
      </div>
      <div class="form-group">
        <label for="bathrooms">Bedrooms</label>
        <input
          type="text"
          name="bathrooms"
          id="bathrooms"
          class="form-control"
          placeholder="Enter # of bathrooms"
        />
      </div>
      <div class="form-group">
        <label for="levels">Levels</label>
        <input
          type="text"
          name="levels"
          id="levels"
          class="form-control"
          placeholder="Enter # of levels"
        />
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="text" name="price" id="price" class="form-control" placeholder="Enter price" />
      </div>
      <div class="form-group">
        <label for="year">Year</label>
        <input
          type="text"
          name="year"
          id="year"
          class="form-control"
          placeholder="Enter year built"
        />
      </div>
      <div class="form-group">
        <label for="imgUrl">Photo</label>
        <input
          type="text"
          name="imgUrl"
          id="imgUrl"
          class="form-control"
          placeholder="Enter image URL"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="textarea"
          name="description"
          id="description"
          class="form-control"
          placeholder="Enter description"
        />
      </div>
      <button type="submit" class="btn btn-success">Add House</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "create-house",
  data() {
    return {
      newHouse: {}
    };
  },
  methods: {
    createHouse() {
      this.$store.dispatch("createHouse", this.newHouse);
      this.newHouse = {};
    }
  }
};
</script>

<style scoped>
</style>