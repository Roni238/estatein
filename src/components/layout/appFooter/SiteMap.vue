<template>
    <div class="container py-[50px]
        xl:py-20 xl:flex xl:justify-between
        2xl:py-[100px]">

        <div class="xl:mr-[100px] 2xl:mr-[160px]">
            
            <base-icon class="h-[34px] w-[113px] mb-5 
                xl:mb-6
                2xl:h-12 2xl:w-40 2xl:mb-8" :icon="'logo'"/> 

            <BaseInput class="xl:w-[305px] 2xl:w-[432px] h-[52px] 2xl:h-[66px]" 
                :type="'email'" 
                :placeholder="'enter your email'">

                <button class="ml-2">
                    <base-icon class="w-8 h-8" :icon="'sendMail'"/>
                </button>
            </BaseInput>
        </div>
        
        <nav class="mt-[50px] flex flex-wrap xl:w-full xl:mt-0 space-between">
            <ul class="w-[50%] inline-block p-5 border-b border-gray-15 flex-grow even:border-l last:w-full
                xl:border-none xl:p-2 xl:min-w-0 xl:max-w-[160px] xl:p-0
                2xl:max-w-[180px]" v-for="section in navSection" :key="section.title">
                <h4 class="mb-4 text-gray-60 xl:text-[18px] 2xl:text-[20px] 2xl:mb-7">{{$t(`footer.lists.${section.title}.title`)}}</h4>
                <li class="mb-2 2xl:mb-4" v-for="link in section.links" :key="link"> {{$t(`footer.lists.${section.title}.${link}`)}} </li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
import BaseInput from '@/components/UI/BaseInput.vue';

interface NavSectionItem {
  title: string
  links: string[]
}

const navSection: NavSectionItem[] = [
  {
    title: "home",
    links: ["hero section", "features", "properties", "testimonials", "faqs"]
  },
  {
    title: "about us",
    links: ["our story", "our works", "how it works", "our team", "our clients"]
  },
  {
    title: "properties",
    links: ["portfolio", "categories"]
  },
  {
    title: "services",
    links: [
      "valuation mastery",
      "strategic marketing",
      "negotiation wizardry",
      "closing success",
      "property management"
    ]
  },
  {
    title: "contact us",
    links: ["contact Form", "our offices"]
  }
]
</script>