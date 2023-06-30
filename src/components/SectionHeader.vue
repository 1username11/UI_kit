<template>
  <div class="font-section text-dark mt-16 section">
    <span>UI kit/ </span>
    <span class="capitalize text-green">{{ route.name }}</span>
  </div>
</template>

<script lang="ts" setup>

const route = useRoute()
</script>

<style lang="scss">
.section {
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
}
</style>
