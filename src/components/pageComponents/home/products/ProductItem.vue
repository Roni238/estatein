<template>
    <article class="item-lists">
        
        <img class="rounded-xl mb-4 object-cover h-[220px] m-auto
            xl:mb-5 2xl:mb-8 xl:h-[255px]
            2xl:h-[318px]" :src="product?.images[0]" 
            onerror="src='https://avatars.mds.yandex.net/i?id=d76e43f09342aa94c8753fffd8df5579_l-8239440-images-thumbs&n=13';">

        <div class="grid gap-5
            xl:gap-6
            2xl:gap-8">
            <div>
                <h3 class="mb-[2px]"> {{ product?.title }} </h3>
                <p> {{ product.description.title.substring(0, 70) }}... 
                    <a class="text-white underline"> Read More </a>
                </p>
            </div>

            <div class="flex gap-2 flex-wrap 
                *:gray-card *:rounded-[28px] *:flex *:items-center *:gap-1 *:px-3 *:py-1">
                <span v-for="(value, key) in product?.description.stats" :key="key"> 
                    <base-icon :icon="key" class="h-5 w-5 2xl:h-6 2xl:w-6"/>
                    {{ value }} {{ key }}
                </span>
            </div>
            
            <div class="flex justify-between">
                <div>
                    <p> Price $ </p>
                    <h3> {{product?.price}} </h3> 
                </div>
                <a class="cta-link px-9 xl:px-10 2xl:px-12">View Property Details</a>   
            </div>
        </div>
    </article>    
</template>

<script setup lang="ts">
import { Product } from '@/types'

const { product } = defineProps<{
  product: Product
}>()
</script>