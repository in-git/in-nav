<template>
  <div class="app-phone flex flex-s" :style="style">
    <!-- 壁纸 -->

    <div class="wallpaper w-100 h-100 absolute"> </div>
    <SearchBox />
  </div>
  <div class="tips fixed t-0 w-100">
    <a-alert closable>更多功能请到手机客户端访问</a-alert>
  </div>
  <div class="fixed b-0 gpt">
    <a-avatar :style="{ backgroundColor: '#FFC72E' }">G</a-avatar>
  </div>
</template>

<script setup lang="ts">
  import { getWallpaper, getFilter } from '@/store/modules/system/utils';
  import { computed, ref } from 'vue';
  import SearchBox from './SearchBox.vue';

  const wallpaperConfig = ref({
    scale: 1,
  });
  const style = computed(() => {
    const { type, src } = getWallpaper();
    const { opacity, blur, grayscale, brightness } = getFilter();
    let backgroundImage = '';
    if (type === 'linear') {
      backgroundImage = `linear-gradient(${src})`;
    } else {
      backgroundImage = `url(${src})`;
    }
    return {
      backgroundImage,
      filter: `
        opacity(${Math.abs(opacity - 1)})
        blur(${blur}px)
        grayscale(${grayscale})
        brightness(${1 - brightness})
        `,
      transform: `scale(${wallpaperConfig.value.scale})`,
    };
  });
</script>

<style lang="scss" scoped>
  .app-phone {
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #eee;
    .wallpaper {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      transition: transform 0.2s !important;
    }
  }
  .gpt {
    right: 40px;
    bottom: 40px;
  }
</style>
