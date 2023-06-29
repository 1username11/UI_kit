<template>
  <div class="flex space-x-8 mt-8">
    <div class="element-subsection">
      Buttons
    </div>
    <div class="space-y-4">
      <div
        v-for="type in types"
        :key="type"
      >
        <CustomButton :type="type" :size="'big'" :disabled="false">
          {{ type }}
        </CustomButton>
      </div>
      <CustomButton type="transparent" :size="'big'" :disabled="true">
        <IconGroup />
        PDF
      </CustomButton>
    </div>

    <div class="space-y-4">
      <div
        v-for="type in types"
        :key="type"
      >
        <CustomButton :type="type" :size="'small'" :disabled="false">
          {{ type }}
        </CustomButton>
      </div>
      <CustomButton type="transparent" :size="'small'" :disabled="false">
        <IconGroup />
        PDF
      </CustomButton>
    </div>
  </div>

  <div class="flex space-x-8 mt-8">
    <div class="element-subsection">
      Inputs
    </div>

    <el-form
      ref="form"
      :model="inputForm"
      label-width="auto"
      :label-position="'top'"
      class="w-full"
      :rules="inputRules"
    >
      <el-form-item label="Activity name" prop="name">
        <el-input v-model="inputForm.name" />
      </el-form-item>
    </el-form>
  </div>

  <div class="flex space-x-8 mt-8">
    <div class="element-subsection">
      Selectors
    </div>

    <el-form
      ref="form"
      :model="selectForm"
      label-width="auto"
      :label-position="'top'"
      class="w-full"
      :rules="selectRules"
    >
      <el-form-item label="Profession" prop="profession">
        <el-select
          v-model="selectForm.profession"
          placeholder="Select"
          size="large"
          clearable
          :suffix-icon="IconArrow"
          :disabled="true"
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
  </div>
</template>

<script lang="ts" setup>
import IconArrow from '~icons/icon/arrow.svg'
const types = ref<Array<'green' | 'transparent' | 'underscored'>>(['green', 'transparent', 'underscored'])

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
</script>

<style scoped lang="scss">
.element-subsection{
  width: 280px;
  height: 88px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 1px 1px 15px 0px rgba(0, 0, 0, 0.15);
  @apply flex items-center justify-center font-main font-medium;
}
</style>
