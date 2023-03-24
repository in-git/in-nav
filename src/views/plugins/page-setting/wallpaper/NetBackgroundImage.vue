<template>
  <div class="image-grid gc-2 gr-2">
    <div v-for="(item, key) in imageList" :key="key">
      <img ref="imgs" :src="item" class="w-100" @click="selectImage(item)" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { setWallpaper } from '@/store/modules/system/utils';
  import { ref } from 'vue';

  // const api = `http://imgapi.xl0408.top/index.php`;
  const imgs = ref();
  const selectImage = (item: string) => {
    setWallpaper({
      type: 'image',
      src: item,
    });
  };
  const imageList = ref(['https://img1.imgtp.com/2023/03/21/gNFucaaF.jpg']);
</script>

<style lang="scss" scoped>
  .image-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(auto-fit, 60px);
    height: calc(400px - 90px);
    align-items: center;
    overflow-y: auto;
    justify-items: center;

    img {
      object-fit: contain;
      width: 100px;
      height: 60px;
      border-radius: 12px;
      cursor: pointer;
    }
  }
</style>
