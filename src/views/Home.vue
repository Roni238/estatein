<template>
  <main>
    <Introduction class="mt-10 
      xl:mt-0"/>
    <Services class="mt-10 
      xl:mt-0"/>
    <Products class="mt-20 
      xl:mt-[120px] 
      2xl:mt-[150px]"/>
    <Reviews class="mt-20 
      xl:mt-[120px] 
        2xl:mt-[150px]"/>
    <FAQS class="my-40 
        xl:mt-[120px] xl:mb-[72px] 
        2xl:mt-[150px] 2xl:mb-[96px]"/> 
  </main>
</template>

<script setup lang="ts">
import Introduction from '@/components/pageComponents/home/Introduction.vue';
import Services from '@/components/pageComponents/home/Services.vue';
import Products from '@/components/pageComponents/home/products/Products.vue';
import Reviews from '@/components/pageComponents/home/reviews/Reviews.vue';
import FAQS from '@/components/pageComponents/home/faqs/FAQS.vue';
import { useHomePageState } from '@/store/useHomePageState';
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n()
const state = useHomePageState()


watch(
() => locale.value,
async (newLocale: string) => {
  state.$reset()
  await state.loadData(newLocale, 'products')
  await state.loadData(newLocale, 'reviews')
  await state.loadData(newLocale, 'faqs')
}
)
</script>