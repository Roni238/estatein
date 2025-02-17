<template>
    <article class="item-lists grid gap-6 xl:gap-8 2xl:gap-10">
        <div class="flex gap-2 h-[42px]">

            <div class="p-2 border border-gray-15 rounded-[50%]" v-for="star in review.rating" :key="star">
                <base-icon :icon="'star'" class="h-6 w-6"/>
            </div>
        </div>
        
        <div>
            <h3> {{ review?.title }}</h3>
            <p class="text-white mt-1"> {{ review?.comment }} </p>
        </div>

        <div class="flex items-center">
            <img class="rounded-[50%] h-[50px] w-[50px] mr-3 object-cover
                2xl:h-[60px] 2xl:w-[60px]" :src="review.author.ava" alt="ava">
                
            <div>
                <p class="text-white text-4 xl:text-[18px] 2xl:text-5"> {{ review.author.name }}</p>
                <p class="mt-1"> {{ review.location }} </p>
            </div>
        </div>
    </article>
</template>

<script lang="ts" setup>
import { toRef } from 'vue';
import { Review } from '@/types'

const props = defineProps<{
  review: Review;
}>()

const review = toRef(props, 'review')
</script>