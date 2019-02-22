<template>
  <div class="product-edit">
    <product
      @change="onChange"
      :product="product"
    >
    </product>
    <Assignment
      v-for="(assignment, i) in assignments"
      :assignment="assignment"
      :key="i"
      :index="i"
      @change="onChange"
      @remove="removeAssignment"
    >
    </Assignment>
    <button class="add-button" @click="$emit('add-assignment')">Add Assignment</button>
  </div>
</template>

<script>
import Assignment from './Assignment'
import Product from './Product'

export default {
  name: 'ProductEdit',
  props: ['assignments', 'product', 'index', 'onChange', 'removeAssignment'],
  components: { Assignment, Product },
}
</script>

<style lang="scss" scoped>
  .product-edit {
    font-family:Arial, Helvetica, sans-serif;
    width: 450px;
    padding: 0em 1em;
    font-size: 0.75em;

    .add-button {
      font-weight: bold;
      background-color: #F55;
      border: 1px solid red;
      margin: 1em 0em;
      color: #FFF;
      font-size: 1em;
    }
  }
</style>

