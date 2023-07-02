<template>
  <div class="flex min-h-full w-full">
    <Navigation />

    <div class="flex flex-col w-full min-h-full px-20 pb-20">
      <Header />

      <SectionHeader />

      <router-view />
    </div>
  </div>
</template>
