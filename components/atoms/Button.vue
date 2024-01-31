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
  @apply w-[315px] h-[60px] mx-auto flex border-0 text-white bg-midnightBlue rounded-[12px] px-[58px] justify-center font-poppins not-italic text-[17px] font-[700] leading-[60px] uppercase tracking-[3.4px] hover:cursor-pointer;
}
</style>
