<template>
  <div class="product-display">
    <h3>Product</h3>
    <p>
      <label>Public Name:
        <input @input="$emit('change')" type="text" v-model="product.public_name">
      </label>
    </p>
    <p>
      <label>SKU:
        <input @input="$emit('change')" type="text" v-model="product.sku">
      </label>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['product']
}
</script>

<style lang="sass" scoped>
  .product-display {
    width: 100%;
    text-align: left;
    border: 1px solid gray;
    padding: 1.5em 1em;
    margin-bottom: 0.25em;

    p, h3 { margin: 0.25em 0em; }

    label {
      display: flex;
      white-space: nowrap;
    }

    input {
      display: block;
      width: 100%;
    }
  }
</style>

