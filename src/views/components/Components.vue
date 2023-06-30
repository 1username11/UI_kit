<template>
  <SectionHeader :currentRoute="currentRoute" />
</template>

<script lang="ts" setup>
const { currentRoute } = storeToRefs(useGeneralStore())

</script>
