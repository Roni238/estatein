<template>
    <section class="flex flex-col-reverse gap-[56px] px-4
        xl:grid xl:grid-cols-2 xl:ml-[calc((100vw-1280px)/2)] xl:px-0
        2xl:gap-[72px] 2xl:ml-[calc((100vw-1596px)/2)]">

        <div class="flex flex-col gap-10
            xl:my-auto">

            <div>
                <h1 class="whitespace-pre-line mb-4 xl:mb-5 2xl:mb-6"> {{ $t('pages.home.introduction.title') }} </h1>
                <p> {{ $t('pages.home.introduction.description') }} </p>
            </div>

            <div class="gap-4 grid
                xl:flex xl:gap-5 xl:*:w-auto
                *:py-3 *:px-5 *:w-full *:justify-center">

                <router-link to="#" class="highlighted-link"> {{ $t('pages.home.introduction.buttons.learn more') }} </router-link>
                <router-link to="/properties" class="cta-link"> {{ $t('pages.home.introduction.buttons.browse properties') }} </router-link>
            </div>
                
            <div class="flex flex-wrap gap-4">
                <div
                  v-for="stat in stats"
                  :key="stat.description"
                  class="gray-card inline-block flex-grow text-center xl:text-left w-1/3 xl:w-1"
                >
                  <h4 class="text-[24px] xl:text-[30px] 2xl:text-[40px]"> {{ stat.quantity }} </h4>
                  <p>{{ $t(`pages.home.introduction.stats.${stat.description}`) }}</p>
                </div>
            </div>
        </div>

        <img class="rounded-[12px] 
            xl:rounded-none" v-once src="@/assets/images/House.png" alt="">
    </section>
</template>

<script lang="ts" setup>
interface Stat {
    quantity: string
    description: string
}

const stats: Stat[] = [
    { quantity: '200+', description: 'happy customers' },
    { quantity: '10k+', description: 'properties for clients' },
    { quantity: '16+', description: 'years of experience' },
]
</script>