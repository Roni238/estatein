<template>
  <Swiper
    :modules="swiperModules"
    :navigation="{
      prevEl: `#prev-${uniqueId}`,
      nextEl: `#next-${uniqueId}`
    }"
    :speed="600"
    :spaceBetween="20"
    :breakpoints="breakpoints"
    @slideChange="setCurrentSlide"
  >

      <SwiperSlide v-for="(slide, index) in slides" :key="index">
          <slot :slide="slide" name="slide"/>
      </SwiperSlide>

      <template v-if="slides.length == 0">
          <SwiperSlide v-for="loader in 3" :key="loader">
              <BaseLoader/> 
          </SwiperSlide>
      </template>
  </Swiper>

  
  <div class="mt-8 border-t pt-4 border-gray-15 flex items-center justify-between">
      <button @click="sectionBtn.btnAction" class="gray-card max-w-[160px] mr-4 xl:hidden"> {{ $t(sectionBtn.title) }} </button>
      
      <div class="hidden xl:block">
          <span class="text-absolute-white"> {{ formattedCurrentPage }} </span>
          <span class="text-gray-60"> {{ $t('prepositions.of') }} {{ slides.length }}</span>
      </div>

      <div class="flex items-center gap-3">
          <button class="swiper-btn-prev" :id="`prev-${uniqueId}`">
              <base-icon :icon="'arrow'" class="h-6 w-6 2xl:h-8 2xl:w-8"/>
          </button>

          <div class="xl:hidden">
              <span class="text-absolute-white"> {{ formattedCurrentPage }} </span>
              <span class="text-gray-60"> {{ $t('prepositions.of') }} {{ slides.length }}</span>
          </div>

          <button class="swiper-btn-next" :id="`next-${uniqueId}`">
              <base-icon :icon="'arrow'" class="h-6 w-6 2xl:h-8 2xl:w-8"/>
          </button>
      </div>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Используется вместо 'swiper/css', чтобы избежать ошибок типизации ts при сборке 
import { v4 } from 'uuid';
import BaseLoader from '@/components/UI/BaseLoader.vue';
import { ref, reactive, computed } from 'vue';

interface SectionBtn {
  title: string
  btnAction: () => void
}

const { slides, sectionBtn } = defineProps<{
  slides: any[]
  sectionBtn: SectionBtn
}>()

const swiperModules = [Navigation]

const uniqueId = v4()

const breakpoints = reactive({
  0: {
    slidesPerView: 1,
  },
  1280: {
    slidesPerView: 3,
  },
})

const currentSlide = ref(0)
const setCurrentSlide = (swiper: any) => { 
  currentSlide.value = swiper.activeIndex
}
const formattedCurrentPage = computed(() => (currentSlide.value + 1).toString().padStart(2, '0'))
</script>

<style lang="scss">
.swiper {

  &-slide{
      height: auto;
  }
  &-btn-next, &-btn-prev{
      border: 1px solid $gray-15;
      border-radius: 50%;
      padding: 10px;
      fill: $absolute-white;

      @include desktop {
          padding: 14px;
      }
  }
  &-btn-prev{
      transform: rotate(180deg);
  }
  &-button-disabled{
      fill: $gray-50;
  }
}

</style>