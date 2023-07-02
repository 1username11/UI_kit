<template>
  <el-menu
    class="el-menu-vertical-demo flex flex-col"
    :collapse="isCollapse"
  >
    <el-menu-item
      v-for="(route, key) in routes"
      :key="route.name"
      :index="key.toString()"
      @click="navigateTo(route.name)"
    >
      <NavigationIcons :name="route.name" />
      <template #title>
        <div v-if="!isCollapse" :to="{ name: route.name }" class="capitalize ml-3">
          <p>{{ route.name }}</p>
        </div>
      </template>
    </el-menu-item>

    <el-menu-item @click="isCollapse=!isCollapse">
      <IconArrowRight v-if="isCollapse" />

      <template #title>
        <div class="flex items-center justify-end">
          <IconArrowLeft />

          <p class="ml-3">Hide Menu</p>
        </div>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { routeNames } from '@/router/route-names'
import { ref } from 'vue'

const isCollapse = ref(true)

const routes = [
  { name: routeNames.fonts },
  { name: routeNames.colors },
  { name: routeNames.icons },
  { name: routeNames.components }
]
const router = useRouter()

function navigateTo (routeName: string) {
  router.push({ name: routeName })
}

</script>
