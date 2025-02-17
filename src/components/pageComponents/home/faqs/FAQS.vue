<template>
    <DefaultHomeSection 
        :sectionTitle="sectionData.sectionTitle"
        :sectionDiscription="sectionData.sectionDiscription"
        :sectionBtn="sectionData.sectionBtn">

         <DefaultHomePageSlider :slides="faqs" :sectionBtn="sectionData.sectionBtn">
            <template #slide="{ slide }">
                <FAQItem :faq="slide"/>
            </template>
          </DefaultHomePageSlider> 

    </DefaultHomeSection>
</template>

<script setup lang="ts">
import { useHomePageState } from "@/store/useHomePageState";
import DefaultHomeSection from '@/components/pageComponents/home/DefaultHomeSection.vue';
import DefaultHomePageSlider from '@/components/pageComponents/home/DefaultHomePageSlider.vue';
import FAQItem from './FAQItem.vue';
import { computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { SectionData } from '@/types'

const { locale } = useI18n()
const state = useHomePageState()

const faqs = computed(() => state.getFaqs)

const sectionData: SectionData = {
  sectionTitle: `pages.home.faqs.title`,
  sectionDiscription: `pages.home.faqs.discription`,
  sectionBtn: {
    title: `pages.home.reviews.link-title`,
    btnAction: () => alert('Открытие модалки с вопросами'),
  },
}

onMounted(async () => {
  await state.loadData(locale.value, 'faqs')
})
</script>