<template>
  <button class="bc-button" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
  defineEmits(['click']);
</script>

<style scoped>
  .bc-button {
    width: 120px;
    height: 36px;
  }
</style>
