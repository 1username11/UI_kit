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

  <div class="flex">
    <div
      v-for="(opacity, index) in opacities"
      :key="index"
      :class="[
        `${squaresColors['#024242']}`,
        `bg-opacity-${opacity}`,
        'w-[124px]',
        'h-[115px]',
        'rounded-[20px]',
        'mt-2'
      ]"
    />
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

const opacities = ref([100, 80, 60, 40, 20, 15, 10, 5])
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
