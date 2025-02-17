<template>
    <div class="py-8 bg-gray-10">
        <div class="container flex-col-reverse flex items-center justify-between text-white xl:flex-row ">
            
            <div class="*:block text-center xl:inline-flex">
                <router-link :to="'/'"> @{{$t('footer.copywriting')}} </router-link>
                <router-link class="xl:ml-8 mt-3 xl:mt-0" :to="'/'"> {{$t('footer.terms')}} </router-link>
            </div>

            <div v-once class="flex gap-4 mb-5 xl:mb-0">
                <a :href="link.href" v-for="link in links" :key="link.href">
                    <base-icon class="w-[52px] h-[52px]" :icon="link.icon"/>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Link {
  href: string
  icon: string
}

const links: Link[] = [
  { href: 'https://www.google.ru/', icon: 'facebook' },
  { href: 'https://www.google.ru/', icon: 'linkedIn' },
  { href: 'https://www.google.ru/', icon: 'twitter' },
  { href: 'https://www.google.ru/', icon: 'youtube' }
]
</script>