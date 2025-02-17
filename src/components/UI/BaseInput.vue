<template>
    <div class="flex items-center border-gray-15 border text-white rounded-md w-full px-5 py-3 border-box
      2xl:px-6 2xl:py-4"
      role="group">
      
      <input
        :type="type"
        :placeholder="$t(`ui.input placeholder.${placeholder}`)"
        class="flex-grow bg-transparent outline-none placeholder-gray-60"
        aria-label="Input field"
      />

      <slot></slot>
    </div>
</template>

<script setup lang="ts">
  const { type, placeholder } = defineProps<{
    type?: string
    placeholder?: string
  }>()
</script>