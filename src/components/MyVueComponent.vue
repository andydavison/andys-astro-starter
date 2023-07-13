<script setup lang="ts">
defineProps<{ value: string }>();
</script>

<template>
  <div class="vueComponent">
    <p>This is a Vue component with the value: {{ value }}</p>
  </div>
</template>

<style scoped>
.vueComponent {
  border: 2px solid black;
  background-color: limegreen;
  color: black;
}
</style>