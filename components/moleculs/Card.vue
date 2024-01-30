<script setup lang="ts">
interface ICardProps {
  title?: string
  description?: string
}

withDefaults(defineProps<ICardProps>(), {
  title: '',
  description: '',
})
</script>

<template>
  <div class="card">
    <div class="card_image"></div>
    <div class="card_text">
      <div class="card_text__title">{{ title }}</div>
      <div class="card_text__list"></div>
      <div class="card_text__description">{{ description }}</div>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply cursor-pointer;
}

.card_image {
}

.card_text {
  @apply pl-[34px] pr-[30px] pb-[34px] pt-[40px];
}

.card_text__title {
  @apply text-[24px] font-[700] leading-[32px] text-primary;
}

.card_text__list {
}

.card_text__description {
}
</style>
