<template>
  <div class="images gc-8 gr-8">
    <div
      v-for="item in linearGradientList"
      :key="item"
      class="image-item cursor-pointer"
      :style="{ backgroundImage: `linear-gradient(${item})` }"
      @click="selectWallpaper(item)"
    ></div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { setWallpaper } from '@/store/modules/system/utils';

  const linearGradientList = ref([
    `19deg, #21D4FD 0%, #B721FF 100%`,
    `0deg, #08AEEA 0%, #2AF598 100%`,
    `0deg, #D9AFD9 0%, #97D9E1 100%`,
  ]);
  function selectWallpaper(item: string) {
    setWallpaper({
      type: 'linear',
      src: item,
    });
  }
</script>

<style lang="scss" scoped>
  .images {
    display: grid;
    grid-template-columns: repeat(auto-fit, 100px);
    height: calc(400px - 90px);
    overflow-y: auto;
    .image-item {
      height: 50px;
      width: 100px;
      border-radius: 4px;
    }
  }
</style>
