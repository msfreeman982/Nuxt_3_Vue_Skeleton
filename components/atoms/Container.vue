<script setup lang="ts"></script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.container {
  @apply py-[80px] max-w-[1372px] mx-auto;
}
</style>
