<template>
  <div v-clickoutside="() => (showApp = false)" class="application">
    <div @click.stop="showApp = true">
      <!-- <icon-settings
        class="border-circle p-4 cursor-pointer dark-icon text-20"
        style="border: 1px solid white"
      /> -->
      <img src="../../assets/logo.png" width="20" alt="logo" class="logo" />
    </div>
    <div v-if="showApp" class="app-container">
      <InDraggable
        title="应用中心"
        position="absolute"
        left="0"
        top="-100%"
        @on-close="showApp = false"
      >
        <div class="px-8 py-4 mt-8">
          <div>
            <div> 系统工具 </div>
            <Divider class="my-8" />
            <div class="grid-apps gc-4">
              <div
                v-for="item in systemList"
                :key="item.title"
                class="system-item flex flex-s text-center cursor-pointer"
                @click="selectSystemApp(item)"
              >
                <div>
                  <component :is="item.icon" class="text-24"></component>
                  <div class="text-12 text-999">{{ item.title }}</div>
                </div>
              </div>
            </div>
            <div class="mt-16"> 图片处理 </div>
            <Divider class="my-8" />
            <div class="grid-apps gc-4 justify-between">
              <div
                v-for="item in linkList[0].list"
                :key="item.title"
                class="system-item flex flex-s text-center cursor-pointer"
                @click="selectSystemApp(item)"
              >
                <AppItem
                  :src="item.icon"
                  :title="item.title"
                  class="w-100"
                  @on-click="
                    addBrowser(item.src);
                    showApp = false;
                  "
                />
              </div>
            </div>
            <Divider class="mb-8" />
          </div>
        </div>
      </InDraggable>
    </div>
  </div>
</template>

<script setup lang="ts">
  import InDraggable from '@/components/draggable/InDraggable.vue';
  import { Divider } from '@arco-design/web-vue';
  import { IconSettings } from '@arco-design/web-vue/es/icon';
  import { ref } from 'vue';
  import { systemList } from '@/static/functions';
  import { linkList } from '@/static/website';
  import AppItem from '@/components/app-item/AppItem.vue';
  import { addBrowser } from '../multiple-applications';

  const showApp = ref(false);

  /**
   * todo: 选择系统应用
   *
   * */
  const selectSystemApp = (item: any) => {
    item.event();
    showApp.value = false;
  };
</script>

<style lang="scss" scoped>
  .system-item {
    width: 64px;
    height: 64px;
    border-radius: 4px;
    &:hover {
      background-color: #eee;
    }
  }
  .application {
    position: fixed;
    bottom: 100px;
    right: 100px;
    z-index: 110;
    .app-container {
      position: absolute;
      bottom: calc(100% + 20px);
      right: 0%;
      width: 300px;
      background-color: white;
      border-radius: 8px;
    }
    .logo {
      background-color: rgba(255, 255, 255, 0.568);
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 4px;
      cursor: pointer;
      box-shadow: 0 0 25px #20202027;
    }
  }
  .dark-icon {
    background-color: black;
    color: white;
  }
  .grid-apps {
    display: grid;
    grid-template-columns: repeat(4, 72px);
  }
</style>
