<template>
  <div class="app-phone flex flex-s">
    <input v-focus placeholder="在这里输入内容进行搜索" />
    <!-- 壁纸 -->
    <div class="wallpaper w-100 h-100 absolute" :style="style"> </div>
    <SearchBox />
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
      background-color: #eee;
      transition: transform 0.2s !important;
    }
  }
</style>
