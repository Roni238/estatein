<template>
    <div class="banner-bg flex gap-[10px] py-4 px-4 relative border-b border-gray-40
        *:text-[white] *:text-[12px]
        xl:*:text-[14px] xl:justify-center xl:h-auto
        2xl:*:text-[18px] " v-if="isBannerOpen">

        <p> ✨ {{ $t('header.banner.title') }} </p>

        <router-link class="underline" :to="'/'"> {{$t('header.banner.link')}} </router-link>

        <button class="absolute right-4 top-[50%] translate-y-[-50%]" @click="closeBanner">
            <base-icon :icon="'cross'" class="w-8 h-8"/>
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

    const isBannerOpen = ref<boolean>(true)

    const closeBanner = (): void => {
        isBannerOpen.value = false
    }
</script>

<style lang="scss" scoped>
    .banner-bg{
        background-image: url('@/assets/images/bg/BACKGROUND2.png');
        background-size: cover;
    }
</style>