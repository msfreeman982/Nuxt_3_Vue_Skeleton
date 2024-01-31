<script setup lang="ts">
import Title from '~/components/atoms/Title.vue'
import Button from '~/components/atoms/Button.vue'
import PageWrapper from '~/components/atoms/PageWrapper.vue'
import CardContainer from '~/components/atoms/CardContainer.vue'
import Container from '~/components/atoms/Container.vue'
import Card from '~/components/atoms/Card.vue'
import fakeData from '~/middleware/fakeapi'
</script>

<template>
  <PageWrapper>
    <Title text="We make creative media that" textColor="adds value" />
    <Container>
      <CardContainer>
        <Card
          v-for="item in fakeData"
          :key="item.id"
          :title="item.title"
          :list="item.list"
          :secondDescription="item.secondDescription"
          :description="item.description"
        />
      </CardContainer>
    </Container>
    <Button buttonText="Get STARTED" />
  </PageWrapper>
</template>

<style>
body {
  margin: 0;
}
</style>
