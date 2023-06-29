<template>
  <button
    :disabled="disabled"
    :class="[
      'button',
      types[type],
      sizes[size]
    ]"
  >
    <slot class="flex items-center justify-center gap-2" />
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  type: 'green' | 'transparent' | 'transparent' | 'underscored'
  size: 'big' | 'small'
  disabled: boolean
}>()

const sizes = ref({
  big: 'big-size-class',
  small: 'small-size-class'
})

const types = ref({
  green: 'green-type-class',
  transparent: 'transparent-type-class',
  underscored: 'underscored-type-class'
})
</script>

<style lang="scss">
.big-size-class{
  width: 150px;
  height: 42px;
}

.small-size-class{
  width: 114px;
  height: 32px;
}

.green-type-class{
  color: #FFFFFF;
  background-color: #A5CF4C;
  border-radius: 6px;
  &:hover{
    box-shadow: 0px 4px 8px 0px rgba(165, 207, 76, 0.5);
  }
  &:active{
    box-shadow: inset 0px 0px 3px 1px rgba(0, 0, 0, 0.4);
  }
  &:disabled{
    background-color: #E0E0E0;
    color: #9E9E9E;
    cursor: not-allowed;
    @apply shadow-none;
  }
}

.transparent-type-class{
  border-radius: 6px;
  border: 1px solid #024242;
  &:hover{
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
  }
  &:active{
    background-color: #024242;
    color: #FFFFFF;
    fill: #FFFFFF;
    @apply shadow-none;
  }
  &:disabled{
    background-color: #E0E0E0;
    color: #9E9E9E;
    cursor: not-allowed;
    border: none;
    @apply shadow-none;
  }
}

.underscored-type-class{
  @apply underline;
  color: #437E60;
  &:hover{
    color: #024242;
  }
  &:disabled{
    cursor: not-allowed;
    color: #9E9E9E;
  }
}
</style>
