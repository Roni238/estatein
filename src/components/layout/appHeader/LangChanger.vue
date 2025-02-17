<template>
    <button
        class="lang-changer ml-auto flex relative gap-1"
        @click="toggleLangMenu"
        aria-haspopup="true"
        aria-label="Change language"
        :aria-expanded="isMenuLangOpen"
    >
        <base-icon :icon="'lang'" class="w-7 h-7 fill-gray-40"/>
        
        <p class="xl:text-[14px] 2xl:text-[18px]">{{ $t(`locale`) }}</p>

        <ul @click.stop
            class="lang-menu absolute top-[50px] p-4 rounded-lg bg-gray-8 border-gray-15 border shadow-xl"
            role="menu"
            v-show="isMenuLangOpen"
        >
            <li role="menuitem" @click="changeLanguage('ru')">Русский</li>
            <li role="menuitem" @click="changeLanguage('en')">English</li>
            <li role="menuitem" @click="changeLanguage('by')">Беларуская</li>
        </ul>
    </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n()

const isMenuLangOpen = ref<boolean>(false)

const changeLanguage = (lang: string): void => {
    locale.value = lang
    isMenuLangOpen.value = false
}

const toggleLangMenu = (): void => {
    isMenuLangOpen.value = !isMenuLangOpen.value
}
</script>