<template>
    <footer class="app-footer border-t border-gray-40 text-white">
        <StartExploreProperties/>
        <SiteMap/>
        <Disclaimer/>
    </footer>
</template>

<script lang="ts" setup>
    import SiteMap from '@/components/layout/appFooter/SiteMap.vue';
    import Disclaimer from '@/components/layout/appFooter/Disclaimer.vue';
    import StartExploreProperties from '@/components/layout/appFooter/StartExploreProperties.vue';
</script>

