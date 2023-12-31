<template>
  <button
    :disabled="disabled"
    class="transition duration-300 flex items-center justify-center"
    :class="[
      types[type],
      sizes[size]
    ]"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { EELButtonType, EELButtonSize } from '@/types/enums'

withDefaults(defineProps<{
  type?: keyof typeof EELButtonType
  size?: keyof typeof EELButtonSize
  disabled?: boolean
}>(), {
  type: EELButtonType.green,
  size: EELButtonSize.big,
  disabled: false
})

const sizes = {
  big: 'big-size-class',
  small: 'small-size-class'
}

const types = {
  green: 'green-type-class',
  transparent: 'transparent-type-class',
  underscored: 'underscored-type-class'
}
</script>

<style lang="scss">
.big-size-class{
  @apply w-37.5 h-10.5 px-4 py-2;
}

.small-size-class{
  @apply w-28.5 h-8  px-2 py-0.5;
}

.green-type-class{
  @apply text-white bg-green rounded-md;
  &:hover{
    @apply shadow-button-hover-green;
  }
  &:active{
    @apply shadow-button-active;
  }
  &:disabled{
    @apply shadow-none bg-disabled text-textDisabled cursor-not-allowed;
  }
}

.transparent-type-class{
  @apply rounded-md border border-darkGreen text-darkGreen fill-darkGray;
  &:hover{
    @apply shadow-button-hover-transparent;
  }
  &:active{
    @apply shadow-none fill-white text-white bg-darkGreen;
  }
  &:disabled{
    @apply shadow-none border-none fill-current cursor-not-allowed text-textDisabled bg-disabled;
  }
}

.underscored-type-class{
  @apply underline text-lightGreen;
  &:hover{
    @apply text-darkGreen
  }
  &:disabled{
    @apply cursor-not-allowed text-textDisabled;
  }
}
</style>
