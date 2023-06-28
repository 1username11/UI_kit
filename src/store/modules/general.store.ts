// the first argument is a unique id of the store across your application
export const useGeneralStore = defineStore('generalStore', () => {
  const router = useRouter()
  const currentRoute = computed(() => {
    return router.currentRoute.value.name
  })

  return {
    currentRoute
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGeneralStore, import.meta.hot))
}
