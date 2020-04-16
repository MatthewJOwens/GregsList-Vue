<template>
  <div class="create-car border offset-3 col-6 my-3">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary btn-lg"
      data-toggle="modal"
      data-target="#add-car-modal"
    >Add Car</button>

    <!-- Modal -->
    <div class="modal fade" id="add-car-modal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Car</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createCar()">
              <div class="form-group">
                <label for="make">Make</label>
                <input
                  type="text"
                  name="make"
                  id
                  class="form-control"
                  placeholder="enter make..."
                  aria-describedby="helpId"
                  v-model="newCar.make"
                  required
                />
              </div>
              <div class="form-group">
                <label for="model">Model</label>
                <input
                  type="text"
                  name="model"
                  id
                  class="form-control"
                  placeholder="enter model..."
                  aria-describedby="helpId"
                  v-model="newCar.model"
                  required
                />
              </div>
              <div class="form-group">
                <label for="year">Year</label>
                <input
                  type="number"
                  name="year"
                  id
                  class="form-control"
                  placeholder="enter year..."
                  aria-describedby="helpId"
                  v-model="newCar.year"
                  required
                />
              </div>
              <div class="form-group">
                <label for="price">Price</label>
                <input
                  type="number"
                  name="price"
                  id
                  class="form-control"
                  placeholder="enter price..."
                  aria-describedby="helpId"
                  v-model="newCar.price"
                  required
                />
              </div>
              <div class="form-group">
                <label for="img">Image</label>
                <input
                  type="text"
                  name="img"
                  id
                  class="form-control"
                  placeholder="enter img..."
                  aria-describedby="helpId"
                  v-model="newCar.imgUrl"
                  required
                />
              </div>
              <button type="submit" class="btn btn-success">Add Car</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "create-car",
  data() {
    return {
      newCar: {}
    };
  },
  methods: {
    createCar() {
      this.$store.dispatch("createCar", this.newCar);
      this.newCar = {};
    }
  }
};
</script>

<style>
</style>