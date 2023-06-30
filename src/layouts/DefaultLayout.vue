<template>
  <div class="flex h-full w-full">
    <Navigation />

    <div class="flex flex-col w-full h-full px-20">
      <Header />

      <SectionHeader />

      <router-view />
    </div>
  </div>
</template>
