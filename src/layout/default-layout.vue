<template>
  <div> 首页信息 </div>
</template>

<script lang="ts" setup>
  import { ref, provide, onMounted } from 'vue';

  const isInit = ref(false);
  const drawerVisible = ref(false);
  provide('toggleDrawerMenu', () => {
    drawerVisible.value = !drawerVisible.value;
  });
  onMounted(() => {
    isInit.value = true;
  });
</script>

<style scoped lang="scss"></style>
