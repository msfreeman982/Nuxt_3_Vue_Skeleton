<script setup lang="ts">
import Title from '~/components/atoms/Title.vue'
import Button from '~/components/atoms/Button.vue'
import Container from '~/components/atoms/Container.vue'
import fakeData from '~/middleware/fakeapi'
</script>

<template>
  <div class="bg-lavenderGray">
    <Title text="We make creative media that" textColor="adds value" />
      <Container>
        {{ fakeData }}
        <Card />
      </Container>
      <Button buttonText="Get STARTED" />
  </div>
</template>

<style scoped></style>
