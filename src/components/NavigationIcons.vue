<template>
  <IconTypography v-if="name === 'fonts'" />

  <IconColor v-else-if="name === 'colors'" />

  <IconIcons v-else-if="name === 'icons'" />

  <IconComponents v-else-if="name === 'components'" />
</template>

<script lang="ts" setup>
defineProps<{
  name: string
}>()
</script>
