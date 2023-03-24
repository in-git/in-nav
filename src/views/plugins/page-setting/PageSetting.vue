<template>
  <InDraggable
    v-if="show"
    width="600px"
    height="400px"
    left="calc(50vw - 300px)"
    top="calc(50vh - 200px)"
    position="absolute"
    @on-close="trigglePageSetting(false)"
  >
    <template #title>
      <span class="text-white">
        <icon-settings spin class="mr-4" />
        <span>系统设定</span>
      </span>
    </template>
    <!-- 顶部菜单栏 -->
    <div class="setting-menu px-8 pt-8">
      <a-tabs default-active-key="1" direction="vertical" class="h-100">
        <a-tab-pane key="1" title="基础配置">
          <BaseConfig />
        </a-tab-pane>
        <a-tab-pane key="2" title="背景图片">
          <Wallpaper></Wallpaper>
        </a-tab-pane>
        <!--
        <a-tab-pane key="3">
          <template #title>Tab 3</template>
          Content of Tab Panel 3
        </a-tab-pane> -->
      </a-tabs>
    </div>
  </InDraggable>
</template>

<script setup lang="ts">
  import InDraggable from '@/components/draggable/InDraggable.vue';
  import Wallpaper from './wallpaper/WallpaperVue.vue';
  import { trigglePageSetting, show } from './index';
  import BaseConfig from './base-config/BaseConfig.vue';
</script>

<style lang="scss" scoped>
  .setting-menu {
    height: calc(100% - 8px);
  }
</style>
