<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import MobileNav from './components/MobileNav.vue'
import { Bars3Icon } from '@heroicons/vue/16/solid'
import { ref, onMounted } from 'vue'

const isMobile = ref(window.matchMedia('(max-width: 768px)').matches)
const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

onMounted(() => {
  window.matchMedia('(max-width: 768px)').addEventListener('change', (e) => {
    isMobile.value = e.matches
  })
})


</script>

<template>

  <div v-if="isMobile" class="sticky py-4">
    <div class="flex justify-between px-4">
      <Bars3Icon @click="toggleMenu" class="h-8 w-8 cursor-pointer" />
      <RouterLink to="/" class="flex gap-2 items-center">
        Swipe&Roast
      </RouterLink>
    </div>
    <MobileNav v-if="isOpen" class="gap-8 absolute ml-4" />
  </div>

  <div v-else class="gap-8 sticky top-0">
    <Navbar />
  </div>

  <main class="p-8 min-h-screen items-center">
    <RouterView />
  </main>
</template>