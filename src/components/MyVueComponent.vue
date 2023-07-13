<script setup lang="ts">
defineProps<{ value: string }>();
</script>

<template>
  <div class="vueComponent">
    <p>This is a Vue component with the value: <b>{{ value }}</b></p>
  </div>
</template>

<style scoped>
.vueComponent {
  border: 2px solid black;
  background-color: springgreen;
  color: black;
  padding: 1em;
}
</style>