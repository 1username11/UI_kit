<template>
  <div
    v-for="colorSquaresContentItem in colorSquaresContent"
    :key="colorSquaresContentItem.title"
    class="flex flex-col mt-9"
  >
    <p class="capitalize font-section colors-title">
      {{ `${colorSquaresContentItem.title} colors` }}
    </p>

    <div class="flex space-x-12 mt-8">
      <div
        v-for="(colorSquare, idx) in colorSquaresContentItem.content"
        :key="colorSquare"
      >
        <div class="flex flex-col items-center">
          <div
            class="w-[124px] h-[115px] rounded-[20px]"
            :class="colorSquaresContentItem.title === 'Primary' ?
              squarePrimaryColors[idx] :
              squareSecondaryColors[idx]"
          />
          <div>{{ colorSquare }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const colorSquaresContent = ref([
  {
    title: 'Primary',
    content: ['#024242', '#A5CF4C', '#D99F59', '#889EA6', '#fff']
  },
  {
    title: 'Secondary',
    content: ['#437E60', '#4495D1', '#DC5973', '#DCDDDE']
  }
])

const squarePrimaryColors = ref(['bg-darkGreen', 'bg-green', 'bg-orange', 'bg-darkGray', 'bg-white'])
const squareSecondaryColors = ref(['bg-lightGreen', 'bg-blue', 'bg-cherry', 'bg-lightGray'])
</script>

<style lang="scss">
.colors-title{
  font-size: 28px;
  font-weight: 600;
  line-height: 35px;
}
</style>
