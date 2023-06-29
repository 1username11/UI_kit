<template>
  <div>
    <button
      :disabled="disabled"
      :class="[
        'button',
        type === 'bigGreen' ? 'button--big-green' : '',
        type === 'smallGreen' ? 'button--small-green' : '',
        type === 'transparent' ? 'button--transparent' : '',
        type === 'underscored' ? 'button--underscored' : '',
        type === 'transparentSmall' ? 'button--transparentSmall' : '',
      ]"
    >
      <slot class="flex items-center justify-center gap-2" />
    </button>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  type: 'bigGreen' | 'smallGreen' | 'transparent' | 'underscored' | 'transparentSmall'
  disabled: boolean
}>()
</script>

<style lang="scss">
.button{
  transition: all 0.2s ease-in-out;
  fill: #889EA6;

  &--big-green{
    width: 150px;
    height: 42px;
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
  &--small-green{
    width: 114px;
    height: 32px;
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
  &--transparent{
    width: 150px;
    height: 42px;
    border-radius: 6px;
    border: 1px solid #024242;
      &:hover{
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
      }
      &:active{
        background-color: #024242;
        color: #FFFFFF;
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
  &--transparentSmall{
    min-width: 134px;
    min-height: 32px;
    border-radius: 6px;
    padding: 4px 8px;
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
  &--underscored{
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
}
</style>
