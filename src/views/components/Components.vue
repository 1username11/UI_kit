<template>
  <div class="flex space-x-8 mt-8">
    <div class="flex items-center justify-center font-main font-medium shadow-md rounded-md w-40 h-20">
      Buttons
    </div>
    <div class="space-y-4">
      <div
        v-for="type in types"
        :key="type"
      >
        <CustomButton :type="type" :disabled="false">
          {{ type }}
        </CustomButton>
      </div>
      <CustomButton type="transparentSmall" :disabled="true">
        <IconGroup />
        PDF
      </CustomButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
const types: Array<'bigGreen'| 'smallGreen'| 'transparent'| 'underscored' | 'transparentSmall'> = ['bigGreen', 'smallGreen', 'transparent', 'underscored']
</script>
