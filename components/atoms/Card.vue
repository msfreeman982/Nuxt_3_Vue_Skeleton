<script setup lang="ts">
import fakeData from '~/middleware/fakeapi'

interface ICardProps {
  title?: string
  description?: string
  secondDescription?: string
  list?: string[]
  imagePath?: string
}

const props = defineProps<ICardProps>()

const item = fakeData.find((item) => item.title === props.title)
</script>

<template>
  <div class="card">
    <div class="card_image">
      <nuxt-img
        v-if="item.imagePath"
        :src="item.imagePath"
        :alt="item.title"
        :title="item.title"
      />
    </div>
    <div class="card_text">
      <div class="card_text__title">{{ title }}</div>
      <ul class="card_text__list">
        <li
          style="
            font-feature-settings:
              'salt' on,
              'liga' off;
          "
          v-for="item in list"
        >
          {{ item }}
        </li>
      </ul>
      <div
        style="
          font-feature-settings:
            'salt' on,
            'liga' off;
        "
        class="card_text__description"
      >
        {{ description }}
        <div v-if="secondDescription">{{ secondDescription }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply bg-white rounded-[8px] flex md:w-[437px] mb-[40px] max-h-[336px];
}

.card_image {
  @apply w-[183px] h-[336px];
}

.card_image img {
  @apply w-[183px] h-[336px];
}

.card_text {
  @apply pl-[34px] pr-[30px] pb-[34px] pt-[40px] max-w-[190px];
}

.card_text__title {
  @apply text-[24px] text-charcoal font-poppins font-[700] leading-[32px];
}

.card_text__list {
  @apply pl-[15px] pr-[8px];
}

.card_text__list li {
  @apply text-charcoal text-[15px] not-italic font-[700] font-nunitoSans leading-[26px];
}

.card_text__list li::marker {
  @apply text-cafe;
}

.card_text__description {
  @apply text-charcoal text-[15px] font-nunitoSans not-italic font-[600] leading-[24px];
}
</style>
