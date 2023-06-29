<template>
  <div class="flex space-x-8 mt-8">
    <div class="flex items-center justify-center font-main font-medium shadow-md rounded-md w-40 h-20">
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
    <div class="flex items-center justify-center font-main font-medium shadow-md rounded-md w-40 h-20">
      Inputs
    </div>

    <el-form
      ref="form"
      :model="sizeForm"
      label-width="auto"
      :label-position="'top'"
      class="w-full"
      :rules="rules"
    >
      <el-form-item label="Activity name" prop="name">
        <el-input v-model="sizeForm.name" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
const types = ref<Array<'green' | 'transparent' | 'underscored'>>(['green', 'transparent', 'underscored'])

const sizeForm = reactive({
  name: ''
})

const rules = ref({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
  ]
})
</script>
