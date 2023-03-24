<template>
  <div>
    <a-list size="small" :bordered="false">
      <a-list-item>
        <ARow justify="space-between">
          <ACol :span="4">
            <div class="text-666 text-12">随机背景</div>
          </ACol>
          <ACol :span="8" class="text-right">
            <a-switch v-model="isRandom" size="small" @change="randomImage">
              <template #checked> 是 </template>
              <template #unchecked> 否 </template>
            </a-switch>
          </ACol>
        </ARow>
      </a-list-item>
      <a-list-item>
        <ARow justify="space-between">
          <ACol :span="4">
            <div class="text-666 text-12">自定义地址</div>
          </ACol>
          <ACol :span="12" class="flex">
            <a-input
              v-model="url"
              placeholder="输入网址"
              size="mini"
              @keydown.enter="setUrl"
            />
            <a-button type="primary" size="mini" @click="setUrl">确定</a-button>
          </ACol>
        </ARow>
      </a-list-item>
    </a-list>
  </div>
</template>

<script setup lang="ts">
  import { setWallpaper } from '@/store/modules/system/utils';
  import { ref } from 'vue';

  /**
   * todo: 设置随机图片
   *
   * */
  const isRandom = ref();
  const url = ref();
  const randomImage = () => {
    if (!isRandom.value) return;
    const src = `http://imgapi.xl0408.top/index.php?cache=`;
    setWallpaper({
      type: 'image',
      src: src + Math.random(),
    });
  };

  const setUrl = () => {
    setWallpaper({
      type: 'image',
      src: url.value,
    });
  };
</script>

<style lang="scss" scoped></style>
