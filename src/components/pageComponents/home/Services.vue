<template>
    <section class="px-4
        xl:px-0">
        
        <div class="grid grid-cols-2 p-3 gap-3 border border-gray-15 rounded-xl  shadow-[0_0_0_4px_#191919]
         xl:rounded-none xl:mx-0 xl:grid-cols-4">

            <div class="gray-card px-5 py-5 text-center relative flex-col items-center flex gap-5 cursor-pointer inline-block flex-grow
                xl:py-4 xl:py-[30px]
                2xl:px-5 2xl:py-10"
                v-for="service in services" :key="service.title">

                <base-icon :icon="service.icon" class="h-12 w-12
                    xl:h-[60px] xl:w-[60px]
                    2xl:h-[82px] 2xl:w-[82px]"/>

                <base-icon :icon="'link-arrow'" class="absolute h-6 w-6 right-5 top-5"/>    

                <p class="text-white 2xl:text-[20px]">{{ $t(`pages.home.services.${service.title}`) }}</p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
interface Service {
  icon: string
  title: string
}

const services: Service[] = [
  { icon: "dream-home", title: "find your dream home" },
  { icon: "property-value", title: "unlock property value" },
  { icon: "property-management", title: "effortless property management" },
  { icon: "smart-investments", title: "smart investments, informed decisions" },
]
</script>
