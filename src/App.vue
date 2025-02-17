<template>
  <div>
    <AppHeader/>
    <router-view/>
    <AppFooter/>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
  import AppHeader from '@/components/layout/appHeader/AppHeader.vue'
  const AppFooter = defineAsyncComponent(() => import('@/components/layout/appFooter/AppFooter.vue'))
</script>