<template>
  <template v-for="(item, key) in components" :key="key">
    <component :is="item"></component>
  </template>
</template>

<script setup lang="ts">
  import { defineAsyncComponent, markRaw, onMounted, ref } from 'vue';

  const components = ref([] as Array<any>);
  onMounted(() => {
    // 导入所有插件
    const files: any = import.meta.glob('./*/*.vue');
    Object.keys(files).forEach((path: string) => {
      const AsyncComp = defineAsyncComponent(files[path]);
      components.value.push(markRaw(AsyncComp));
    });
  });
</script>

<style lang="scss" scoped></style>
