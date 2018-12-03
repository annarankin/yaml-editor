<template>
  <div class="main">
    <h1>Create Product</h1>
    <div class="container">
      <product-edit
        :product="data.product"
        :assignments="data.assignments"
        :removeAssignment="removeAssignment"
        :onChange="onChange"
        @addAssignment="addAssignment"
      >
      </product-edit>

      <yml-display
        :json="data"
      >
      </yml-display>
    </div>
  </div>
</template>

<script>
import Loader from './data/loader'
import YmlDisplay from './display/YmlDisplay'
import ProductEdit from './edit/ProductEdit'
import YAML from 'yamljs'

const loader = new Loader()

export default {
  name: 'App',
  components: { YmlDisplay, ProductEdit },
  data() {
    return {
      data: loader.load(),
    };
  },
  methods: {
    onChange() { loader.store(this.data) },
    removeAssignment(index) {
      this.data.assignments.splice(index, 1)
      loader.store(this.data)
    },
    addAssignment() {
      this.data.assignments.push({
        name: null,
        resource_name: null,
        description: null,
        relative_start_days: null,
        relative_end_days: null,
        locked: false,
      })
      loader.store(this.data)
    }
  }
};
</script>

<style lang="sass">
  .main {
    & * { box-sizing: border-box; }

    h1 {
      text-align: center;
      font-family:Arial, Helvetica, sans-serif;
    }
    .container {
      display: flex;
      justify-content: space-around;
    }
  }
</style>


