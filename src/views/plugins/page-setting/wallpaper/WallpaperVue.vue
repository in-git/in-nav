<template>
  <div class="wallpaper">
    <div class="flex justify-between header align-center">
      <div class="flex">
        <div
          v-for="(item, key) in backgroundType"
          :key="key"
          class="background-type"
          :class="[{ 'type-active': key === currentType.type }]"
          @click="selectType(item, key)"
        >
          {{ item.text }}
        </div>
        <!-- <div class="ml-8 flex align-center" @click="randomImage">
          <a-button size="mini" type="primary">
            <icon-loop /> <span>随机</span>
          </a-button>
        </div> -->
      </div>
      <div>
        <a-popover position="br" trigger="click">
          <a-button shape="circle"> <icon-settings /></a-button>
          <template #content>
            <div class="text-999"> 背景滤镜调整 </div>
            <a-divider class="my-4"></a-divider>
            <div class="filter-setting">
              <div class="flex justify-between">
                <div> 透明度 </div>
                <a-slider
                  v-model="getFilter().opacity"
                  :step="0.1"
                  :max="1"
                  :min="0"
                  :style="{ width: '80px' }"
              /></div>
              <div class="flex justify-between">
                <div> 模糊度 </div>
                <a-slider
                  v-model="getFilter().blur"
                  :step="1"
                  :max="10"
                  :min="0"
                  :style="{ width: '80px' }"
              /></div>
              <div class="flex justify-between">
                <div> 灰度 </div>
                <a-slider
                  v-model="getFilter().grayscale"
                  :step="0.1"
                  :max="1"
                  :min="0"
                  :style="{ width: '80px' }"
              /></div>
              <div class="flex justify-between">
                <div> 明亮度 </div>
                <a-slider
                  v-model="getFilter().brightness"
                  :step="0.1"
                  :max="1"
                  :min="0"
                  :style="{ width: '80px' }"
              /></div>
              <a-divider class="mt-4 mb-12"></a-divider>
              <a-button
                long
                size="mini"
                type="outline"
                status="danger"
                @click="reset"
              >
                重置
              </a-button>
            </div>
          </template>
        </a-popover>
      </div>
    </div>
    <a-divider class="my-8"></a-divider>
    <div>
      <component :is="currentType.component"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { markRaw, reactive, ref } from 'vue';
  import {
    getFilter,
    resetFilter,
    setWallpaper,
  } from '@/store/modules/system/utils';
  import LinearGradient from './LinearGradient.vue';
  import NetBackgroundImage from './NetBackgroundImage.vue';
  import CustomBackground from './CustomBackground.vue';

  const currentType = reactive({
    type: 0,
    component: markRaw(NetBackgroundImage),
  });

  function selectType(item: { component: any }, index: number) {
    currentType.type = index;
    currentType.component = item.component;
  }
  const backgroundType = ref([
    {
      text: '推荐背景',
      type: 'recommand',
      component: markRaw(NetBackgroundImage),
    },
    {
      text: '渐变背景',
      type: 'linear-gradient',
      component: markRaw(LinearGradient),
    },
    {
      text: '自定义',
      type: 'custom',
      component: markRaw(CustomBackground),
    },
  ]);

  /**
   * todo: 重置
   *
   * */
  const reset = () => {
    resetFilter();
  };
</script>

<style lang="scss" scoped>
  .wallpaper {
    user-select: none;
  }
  .background-type {
    color: #999;
    padding: 0 12px;
    cursor: pointer;
  }
  .type-active {
    color: rgb(var(--primary-6));
    background-color: #efefef;
    border-radius: 4px;
  }
  .header {
    line-height: 32px;
  }
  .filter-setting {
    width: 150px;
  }
</style>
