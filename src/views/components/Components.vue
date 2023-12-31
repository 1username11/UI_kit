<template>
  <div class="flex space-x-8 mt-8">
    <div
      class="flex items-center justify-center font-main font-medium
  shadow-components-subsection h-22 w-70 rounded-2.5xl bg-white"
    >
      Buttons
    </div>
    <div class="space-y-4">
      <div
        v-for="type in types"
        :key="type"
      >
        <CustomButton :type="type" :disabled="buttonsDisabled">
          {{ type }}
        </CustomButton>
      </div>

      <CustomButton type="transparent" :disabled="buttonsDisabled">
        <IconGroup class="mr-2" />

        <p>PDF</p>
      </CustomButton>
    </div>

    <div class="space-y-4">
      <div
        v-for="type in types"
        :key="type"
      >
        <CustomButton :type="type" :size="'small'" :disabled="buttonsDisabled">
          {{ type }}
        </CustomButton>
      </div>

      <CustomButton type="transparent" :size="'small'" :disabled="buttonsDisabled">
        <IconGroup class="mr-2" />
        <p>PDF</p>
      </CustomButton>
    </div>

    <CustomButton
      :type="$elButtonType.underscored"
      :size="$elButtonSize.small"
      @click="buttonsDisabled = !buttonsDisabled"
    >
      {{ inputDisabled ? 'Enable' : 'Disable' }}
    </CustomButton>
  </div>

  <div class="flex items-center space-x-8 mt-8">
    <div
      class="flex items-center justify-center font-main font-medium
  shadow-components-subsection h-22 w-70 rounded-2.5xl bg-white"
    >
      Inputs
    </div>

    <el-form
      ref="form"
      :model="inputForm"
      label-width="auto"
      :label-position="'top'"
      :rules="inputRules"
    >
      <el-form-item label="Activity name" prop="name">
        <el-input v-model="inputForm.name" placeholder="Name" :disabled="inputDisabled" />
      </el-form-item>
    </el-form>

    <CustomButton :type="$elButtonType.underscored" :size="$elButtonSize.small" @click="inputDisabled = !inputDisabled">
      {{ inputDisabled ? 'Enable' : 'Disable' }}
    </CustomButton>
  </div>

  <div class="flex items-center space-x-8 mt-8">
    <div
      class="flex items-center justify-center font-main font-medium
  shadow-components-subsection h-22 w-70 rounded-2.5xl bg-white"
    >
      Selectors
    </div>

    <el-form
      ref="form"
      :model="selectForm"
      label-width="auto"
      :label-position="'top'"
      :rules="selectRules"
    >
      <el-form-item label="Profession" prop="profession">
        <el-select
          v-model="selectForm.profession"
          placeholder="Select"
          size="large"
          clearable
          :suffix-icon="IconArrow"
          :disabled="selectDisabled"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
    </el-form>

    <CustomButton
      :type="$elButtonType.underscored"
      :size="$elButtonSize.small" @click="selectDisabled = !selectDisabled"
    >
      {{ selectDisabled ? 'Enable' : 'Disable' }}
    </CustomButton>
  </div>

  <div class="flex space-x-8 mt-8">
    <div
      class="flex items-center justify-center font-main font-medium
      shadow-components-subsection h-22 w-70 rounded-2.5xl bg-white"
    >
      Controls
    </div>

    <div class="flex flex-col">
      <p class="font-main font-medium">Checkboxes</p>
      <el-checkbox v-model="checked1" label="Option 1" size="large" />
      <el-checkbox v-model="checked2" label="Option 2" size="large" />
    </div>

    <div class="flex flex-col">
      <p class="font-main font-medium">Radio</p>
      <el-radio-group v-model="radio1" class="flex flex-col">
        <el-radio label="1" size="large">Option 1</el-radio>
        <el-radio label="2" size="large">Option 2</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { EELButtonType } from '@/types/enums'
import IconArrow from '~icons/icon/arrow.svg'

const types: Array<keyof typeof EELButtonType> =
  [EELButtonType.green, EELButtonType.transparent, EELButtonType.underscored]

const inputForm = reactive({
  name: ''
})

const inputRules = ref({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
  ]
})

const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  },
  {
    value: 'Option6',
    label: 'Option6'
  },
  {
    value: 'Option7',
    label: 'Option7'
  },
  {
    value: 'Option8',
    label: 'Option8'
  },
  {
    value: 'Option9',
    label: 'Option9'
  },
  {
    value: 'Option10',
    label: 'Option10'
  }
]

const selectForm = reactive({
  profession: ''
})

const selectRules = ref({
  profession: [
    { required: true, message: 'Please select profession', trigger: 'change' }
  ]
})

const checked1 = ref(false)
const checked2 = ref(false)
const radio1 = ref('1')

const inputDisabled = ref(false)
const selectDisabled = ref(false)

const buttonsDisabled = ref(false)
</script>
