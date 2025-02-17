<template>
    <article class="item-lists h-[242px] xl:h-[282px] 2xl:h-[346px] flex flex-col justify-between">
        <h3 > {{ faq?.question }} </h3>
        <p class="mt-auto mb-[20px]"> {{ faq?.res }} </p>
        <router-link class="gray-card text-center xl:self-start" :to="faq?.link">Read More</router-link>
    </article>
</template>

<script setup lang="ts">
import {FAQ } from '@/types'

const { faq } = defineProps<{
  faq: FAQ 
}>()
</script>