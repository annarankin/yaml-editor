<template>
  <textarea readonly cols="30" rows="10" v-model="yml">
  </textarea>
</template>

<script>
import YAML from 'json-to-pretty-yaml'

export default {
  name: 'YmlDisplay',
  props: ['json'],
  computed: {
    yml() {
      return YAML.stringify(this.json)
        .replace(/\ ""/g, ' null')
        .replace(/"(-?\d+)"/g, (match, capture) => capture)
    }
  }
}
</script>

<style>
textarea {
  width: 500px;
  font-family: 'Courier New', Courier, monospace;
  resize: none;
}

</style>
