<template>
  <div class="assignment-display">
    <button class="remove-button" @click="$emit('remove', index)">×</button>
    <p><label>
      <span>Name:</span>
      <input type="text" @input="$emit('change')" v-model="assignment.name">
    </label></p>

    <p><label>
      <span>Resource Name:</span>
      <input type="text" @input="$emit('change')" v-model="assignment.resource_name">
    </label></p>

    <p><label>
      <span>Description:</span>
      <input type="text" @input="$emit('change')" v-model="assignment.description">
    </label></p>

    <div class="durations">
      <p><label>
        <span>Relative Start Days:</span>
        <input type="number" @input="$emit('change')" v-model="assignment.relative_start_days">
      </label></p>

      <p><label>
        <span>Relative End Days:</span>
        <input type="number" @input="$emit('change')" v-model="assignment.relative_end_days">
      </label></p>

    </div>
    <p><label>
      <span>Locked:</span>
      <input type="checkbox" @input="$emit('change')" v-model="assignment.locked">
    </label></p>
  </div>
</template>

<script>
export default {
  name: 'Assignment',
  props: ['assignment', 'index']
}
</script>

<style lang="sass" scoped>
  .assignment-display {
    width: 100%;
    text-align: left;
    border: 1px solid gray;
    padding: 1.5em;
    margin-bottom: 0.25em;
    position: relative;

    p { margin: 0.25em 0em; }

    label {
      display: flex;
      white-space: nowrap;

      span { margin: 0.25em 0.5em; }
    }

    .remove-button {
      position: absolute;
      top: 0em;
      right: 0em;
      background-color: #F55;
      border: 1px solid red;
      color: #FFF;
      font-size: 1em;
    }

    input {
      display: block;
      width: 100%;
    }
    .durations {
      display: flex;

      p {
        width: 100%;
      }
    }
  }
</style>

