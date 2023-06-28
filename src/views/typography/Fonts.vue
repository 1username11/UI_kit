<template>
  <div class="font-section text-dark mt-16 text-section">
    <span>UI kit/ </span>
    <span class="capitalize text-greenLight">{{ currentRoute }}</span>
  </div>

  <div v-for="(contentItem) in content" :key="contentItem.title">
    <div class="flex justify-between mt-8">
      <div v-for="(subContent, idx) in contentItem.content" :key="idx">
        <p
          :class="[textClasses[contentItem.title as string],
                   !contentItem.exclude ? ['font-bold', 'font-medium', ''][idx] : ''
          ]"
        >
          {{ contentItem.title }}
        </p>
        <p class="font-manrope text-subtitle text-subtitleGray">{{ subContent }}</p>
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
    content: ['Manrope Semibold, 14 Size, 150% Line'],
    exclude: true
  },
  {
    title: 'Buttons',
    content: ['Manrope Bold , 14 Size, 150% Line'],
    exclude: true
  }
])

const textClasses: TIndexedObject<string> = {
  Headlines: 'font-headlines text-headlines',
  Subhead: 'text-subheads',
  'Paragraph Header': 'text-paragraphHeader',
  'Body 1': 'text-body',
  'Secondary content': 'text-secondaryContent',
  Navigation: 'text-navigation',
  Buttons: 'text-buttons'
}
</script>
