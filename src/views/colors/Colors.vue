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
        v-for="colorSquare in colorSquaresContentItem.content"
        :key="colorSquare"
      >
        <div class="flex flex-col items-center">
          <div
            class="w-[124px] h-[115px] rounded-[20px]"
            :class="[squaresColors[colorSquare as string], colorSquare === '#ffffff' ? 'white-square-shadow' : '']"
          />
          <div class="mt-2">{{ colorSquare }}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-4">
    <div
      v-for="(colorsGroup, idx) in colorsGroups"
      :key="idx"
      class="flex mt-4 space-x-4"
    >
      <div
        v-for="color in colorsGroup"
        :key="color"
        class="flex"
      >
        <div
          v-for="(opacity, index) in color !== '#889EA6'
            ? opacities.filter((item) => item * 10 % 2 === 0 && item >= 0.2)
            : opacities"
          :key="index"
          class="h-20 flex items-center justify-center"
          :class="[
            `${squaresColors[color as string]}`,
            opacity === 1 ? 'w-40' : 'w-[44px]',
            opacity > 0.5 ? 'text-white' : 'text-gray-950',
          ]"
          :style="[`opacity: ${opacity}`, ]"
        >
          <p class="text-class">
            {{ opacity === 1 ? '#024242' : `${opacity * 100}%` }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const colorSquaresContent = ref([
  {
    title: 'Primary',
    content: ['#024242', '#A5CF4C', '#D99F59', '#889EA6', '#ffffff']
  },
  {
    title: 'Secondary',
    content: ['#437E60', '#4495D1', '#DC5973', '#DCDDDE']
  }
])

const squaresColors = ref<TIndexedObject<string>>({
  '#024242': 'bg-darkGreen',
  '#A5CF4C': 'bg-green',
  '#D99F59': 'bg-orange',
  '#889EA6': 'bg-darkGray',
  '#ffffff': 'bg-white',
  '#437E60': 'bg-lightGreen',
  '#4495D1': 'bg-blue',
  '#DC5973': 'bg-cherry',
  '#DCDDDE': 'bg-lightGray'
})

const colorsGroups = ref([
  ['#024242', '#A5CF4C'],
  ['#437E60', '#D99F59'],
  ['#4495D1', '#DC5973'],
  ['#889EA6']
])

const opacities = ref([1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.25, 0.2, 0.15, 0.1, 0.05])
</script>

<style lang="scss">
.colors-title{
  font-size: 28px;
  font-weight: 600;
  line-height: 35px;
}

.white-square-shadow{
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.15);
}
</style>
