<template>
    <svg>
        <use :xlink:href="`/assets/icons.svg#${icon}`"></use>
    </svg>
</template>

<script setup lang="ts">
    const { icon } = defineProps<{
        icon: string
    }>()

    defineOptions({
        name: 'BaseIcon'
    })
</script>