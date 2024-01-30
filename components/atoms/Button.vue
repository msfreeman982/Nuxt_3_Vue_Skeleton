<script setup lang="ts">
import { defineProps } from 'vue'

interface IButtonProps {
  buttonText?: string
}

const { buttonText = '' } = defineProps<IButtonProps>()
</script>

<template>
  <button class="btn">
    {{ buttonText }}
  </button>
</template>

<style scoped>
.btn {
  @apply text-white bg-midnightBlue rounded-[12px] px-[58px] text-center font-poppins not-italic text-[17px] font-[700] leading-[60px] uppercase tracking-[3.4px];
}
</style>
