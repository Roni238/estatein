<template>
    <section class="container relative">

        <base-icon :icon="'stars'" class="h-5 w-[45px] absolute left-[8px] top-[-25px] 
            xl:h-6 xl:w-[54px] xl:top-[-24px]
            2xl:h-[30px] 2xl:w-[68px] 2xl:top-[-35px] 2xl:left-[3px]"/>

        <header class="flex justify-between mb-10
            xl:mb-[60px]
            2xl:mb-20">

            <div class="max-w-[960px] 2xl:max-w-[1200px]">
                <h2 class="mb-2"> {{$t(sectionTitle)}} </h2>
                <p> {{ $t(sectionDiscription) }} </p>
            </div>

            <button class="hidden gray-card mt-auto xl:block" @click="sectionBtn.btnAction"> {{ $t(sectionBtn.title) }} </button>
        </header>

        <slot/>
    </section>
</template>

<script setup lang="ts">
interface SectionBtn {
    title: string
    btnAction: () => void
}

const { sectionTitle, sectionDiscription, sectionBtn } = defineProps<{
  sectionTitle: string
  sectionDiscription: string
  sectionBtn: SectionBtn
}>()
</script>
