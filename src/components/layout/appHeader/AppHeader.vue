<template>
  <header class="sticky left-0 right-0 bg-gray-10 border-b border-gray-40 text-white top-0 z-50">
      <Banner class="sticky z-40"/>

      <nav class="container flex py-5 z-40 bg-gray-10">
          <router-link class="mr-auto flex items-center" :to="'/'">
              <base-icon :icon="'logo'" class="h-[34px] w-[113px] 2xl:h-12 2xl:w-40"/>
          </router-link>

          <router-link 
              class="app-header__link hidden xl:flex px-5 py-3 rounded-md 2xl:px-6 2xl:py-4"
              :to="link.to" 
              v-for="link in links.slice(0, 4)" 
              :key="link.title"
          >
              {{ $t(`header.nav-links.${link.title}`) }}
          </router-link>

          <lang-changer class="ml-auto flex items-center"/>

          <router-link 
              class="hidden xl:highlighted-link px-5 py-3 ml-12 2xl:px-6 2xl:py-4" 
              :to="links[4].to"
          >
              {{ $t(`header.nav-links.${links[4].title}`) }}
          </router-link>

          <button class="ml-3 xl:hidden" @click="toggleSidebar">
              <base-icon :icon="'sidebar'" class="h-7 w-7"/>
          </button>
      </nav>
      
      <transition name="mobile-nav">
        <nav v-if="isMobileNavOpen" class="absolute right-0 left-0 bg-gray-8 text-white py-4 px-6 border-y border-gray-40 z-[-1] xl:hidden">
            <router-link 
                v-for="link in links" 
                :key="link.title" 
                :to="link.to" 
                class="block text-lg px-5 py-3 rounded-md"
                @click="toggleSidebar"
            >
                {{ $t(`header.nav-links.${link.title}`) }}
            </router-link>
        </nav>
    </transition>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Banner from './Banner.vue';
import LangChanger from './LangChanger.vue';

interface Link {
  title: string
  to: string
}

const links: Link[] = [
  { title: "home", to: '/' },
  { title: "about", to: '/about' },
  { title: "properties", to: '/properties' },
  { title: "services", to: '/services' },
  { title: "contact", to: '/contacts' }
]

const isMobileNavOpen = ref(false)

const toggleSidebar = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value
}
</script>

<style lang="scss" scoped>
.app-header__link.router-link-active {
  border: 1px solid $gray-15;
  background-color: $gray-08;
}
.mobile-menu a.router-link-active{
  background-color: $gray-10;
}

.mobile-nav-enter-active, .mobile-nav-leave-active {
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
}

.mobile-nav-enter-from, .mobile-nav-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}

.mobile-nav-enter-to, .mobile-nav-leave-from {
  transform: translateY(0px);
  opacity: 1;
}
</style>