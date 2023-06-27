<template>
  <div class="font-section text-dark mt-16 section">
    <span>UI kit/ </span>
    <span class="capitalize text-greenLight">{{ currentRoute }}</span>
  </div>

  <div v-for="(contentItem) in content" :key="contentItem.title">
    <div class="flex justify-between mt-8">
      <div v-for="(subContent, idx) in contentItem.content" :key="idx">
        <p :class="getParagraphClasses(contentItem, idx)">
          {{ contentItem.title }}
        </p>
        <p class="font-main text-xs text-subtitleGray">{{ subContent }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { currentRoute } = storeToRefs(useGeneralStore())

const content = ref<IContent[]>([
  {
    title: 'Headlines',
    content: ['Athelas Bold, 28 Size, 120% Line']
  },
  {
    title: 'Subhead',
    content: [
      'Manrope Bold, 24 Size, 120% Line',
      'Manrope Medium, 24 Size, 120% Line',
      'Manrope Regular, 24 Size, 120% Line'
    ]
  },
  {
    title: 'Paragraph Header',
    content: [
      'Manrope Bold, 18 Size, 155% Line',
      'Manrope Medium, 18 Size, 155% Line',
      'Manrope Regular, 18 Size, 155% Line'
    ]
  },
  {
    title: 'Body 1',
    content: [
      'Manrope Bold, 16 Size, 150% Line',
      'Manrope Medium, 16 Size, 150% Line',
      'Manrope Regular, 16 Size, 150% Line'
    ]
  },
  {
    title: 'Secondary content',
    content: [
      'Manrope Bold, 14 Size, 150% Line',
      'Manrope Medium, 14 Size, 150% Line',
      'Manrope Regular, 14 Size, 150% Line'
    ]
  },
  {
    title: 'Navigation',
    content: ['Manrope Semibold, 14 Size, 150% Line']
  },
  {
    title: 'Buttons',
    content: ['Manrope Bold , 14 Size, 150% Line']
  }
])

const getParagraphClasses = (contentItem: IContent, idx: number) => {
  return [
    ['font-bold', 'font-medium', ''][idx],
    contentItem.title === 'Headlines' ? 'font-headlines headline mt-8' : '',
    contentItem.title === 'Subhead' ? 'text-2xl' : '',
    contentItem.title === 'Paragraph Header' ? 'text-lg' : '',
    (contentItem.title === 'Body 1' || contentItem.title === 'Secondary content') ? 'text-base' : '',
    contentItem.title === 'Navigation' ? 'text-sm font-semibold' : '',
    contentItem.title === 'Buttons' ? 'text-sm font-bold' : ''
  ]
}
</script>

<style lang="scss">
.section {
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
}

.headline {
  font-weight: 700;
  line-height: 120%;
  font-size: 28px;
}

.font-main {
  font-family: 'Manrope', sans-serif;
}
</style>
