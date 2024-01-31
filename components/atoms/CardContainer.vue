<script setup lang="ts"></script>

<template>
  <div class="cardContainer">
    <slot />
  </div>
</template>

<style scoped>
.cardContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
