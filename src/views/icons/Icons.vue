<template>
  <div
    v-for="iconsContentItem in iconsContent"
    :key="iconsContentItem.title"
  >
    <h2 class="text-2xl font-bold">{{ iconsContentItem.title }}</h2>

    <div class="flex gap-4">
      <div
        v-for="(icon, idx) in iconsContentItem.icons"
        :key="idx"
        class="icon"
      >
        <component :is="icon" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconActivities from '~icons/icon/activities.svg'
import IconAgenda from '~icons/icon/agenda.svg'
import IconArrowBack from '~icons/icon/arrow-back.svg'
import IconArrow from '~icons/icon/arrow.svg'
import IconBack from '~icons/icon/back.svg'
import IconBooks from '~icons/icon/books.svg'
import IconCommunity from '~icons/icon/community.svg'
import IconCourses from '~icons/icon/courses.svg'
import IconDashboard from '~icons/icon/dashboard.svg'
import IconDate from '~icons/icon/date.svg'
import IconDone from '~icons/icon/done.svg'
import IconDownload from '~icons/icon/download.svg'
import IconFullScreen from '~icons/icon/full-screen.svg'
import IconInfo from '~icons/icon/info.svg'
import IconLink from '~icons/icon/link.svg'
import IconLogout from '~icons/icon/logout.svg'
import IconOrders from '~icons/icon/orders.svg'
import IconProfessionalInfo from '~icons/icon/professional-info.svg'
import IconProfile from '~icons/icon/profile.svg'
import IconTime from '~icons/icon/time.svg'
import IconVideo from '~icons/icon/video.svg'
import IconWorkshops from '~icons/icon/workshops.svg'

const iconsContent = ref([
  {
    title: 'Menu',
    icons: [IconDashboard, IconCommunity, IconWorkshops, IconCourses, IconBooks,
      IconOrders, IconProfile, IconLogout, IconProfessionalInfo]
  },
  {
    title: 'Navigation',
    icons: [IconBack, IconArrow]

  },
  {
    title: 'Other',
    icons: [IconActivities, IconAgenda, IconArrowBack, IconDate, IconDone, IconDownload,
      IconFullScreen, IconInfo, IconLink, IconTime, IconVideo]
  }
])
</script>

<style lang="scss">
.icon {
  :hover {
    fill: #A5CF4C;
  }
}
</style>
