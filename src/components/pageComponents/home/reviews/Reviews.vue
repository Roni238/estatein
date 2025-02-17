<template>
    <DefaultHomeSection 
        :sectionTitle="sectionData.sectionTitle"
        :sectionDiscription="sectionData.sectionDiscription"
        :sectionBtn="sectionData.sectionBtn">
        
        <DefaultHomePageSlider :slides="reviews" :sectionBtn="sectionData.sectionBtn">
            <template #slide="{ slide }">
                 <ReviewsItem :review="slide"/>
            </template>
        </DefaultHomePageSlider>

    </DefaultHomeSection>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useHomePageState } from '@/store/useHomePageState';
import DefaultHomeSection from '../DefaultHomeSection.vue';
import DefaultHomePageSlider from '../DefaultHomePageSlider.vue';
import ReviewsItem from './ReviewsItem.vue';
import { SectionData } from '@/types'

const { locale } = useI18n()
const state = useHomePageState()

const sectionData: SectionData = {
  sectionTitle: `pages.home.reviews.title`,
  sectionDiscription: `pages.home.reviews.discription`,
  sectionBtn: {
    title: `pages.home.reviews.link-title`,
    btnAction: () => alert('Открытие модалки отзывов'),
  },
}

const reviews = computed(() => state.getReviews)

onMounted(async () => {
  await state.loadData(locale.value, 'reviews')
})
</script>