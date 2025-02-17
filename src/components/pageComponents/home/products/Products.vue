<template>
    <HomeSection 
        :sectionTitle="sectionData.sectionTitle"
        :sectionDiscription="sectionData.sectionDiscription"
        :sectionBtn="sectionData.sectionBtn">
        
        
        <DefaultHomePageSlider :slides="products" :sectionBtn="sectionData.sectionBtn">
            <template #slide="{ slide }">
                <ProductItem :product="slide"/>
            </template>
        </DefaultHomePageSlider>

    </HomeSection>
</template>

<script setup lang="ts">
import { useHomePageState } from '@/store/useHomePageState';
import HomeSection from '../DefaultHomeSection.vue';
import ProductItem from './ProductItem.vue';
import DefaultHomePageSlider from '../DefaultHomePageSlider.vue';
import { computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { SectionData } from '@/types'

const router = useRouter()
const { locale } = useI18n()

const state = useHomePageState()

const products = computed(() => state.getProducts)

const sectionData: SectionData = {
  sectionTitle: `pages.home.products.title`,
  sectionDiscription: `pages.home.products.discription`,
  sectionBtn: {
    title: `pages.home.reviews.link-title`,
    btnAction: () => router.push('/properties'),
  },
}

onMounted(async () => {
  await state.loadData(locale.value, 'products')
})
</script>