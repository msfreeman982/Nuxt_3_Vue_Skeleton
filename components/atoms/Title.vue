<script setup lang="ts">
interface ItitleProps {
  text?: string
  textColor?: string
}

const { text = '', textColor = '' } = defineProps<ItitleProps>()
</script>

<template>
 
  <h1 class="title">
    <slot />{{ text }} <span class="title_color">{{ textColor }}</span>
  </h1> 



</template>

<style scoped>
.title {
  @apply font-poppins text-midnightBlue text-center text-[56px] not-italic font-[700] leading-[55px] tracking-[0.56px];
}

.title_color {
  @apply text-royalBlue;
}
</style>
