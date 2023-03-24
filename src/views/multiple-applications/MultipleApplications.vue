<template>
  <div v-for="item in components" :key="item.title">
    <BrowserVue v-model:show="item.show" :src="item.src"></BrowserVue>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { browserList } from '.';
  import BrowserVue from './browser/BrowserVue.vue';

  const components = computed(() => {
    return browserList.value;
  });
</script>
