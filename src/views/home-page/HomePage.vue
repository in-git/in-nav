<template>
  <div class="home-page">
    <a-dropdown position="bl" trigger="contextMenu" align-point>
      <div
        class="wallpaper w-100 h-100 absolute"
        :style="style"
        @wheel="onWallpaperWheel"
        @drop="fileDrop"
      >
      </div>
      <template #content>
        <div style="width: 160px">
          <a-doption
            v-for="item in homePageContextmenu.slice(0, 5)"
            :key="item.title"
            @click="item.event"
          >
            <component :is="item.icon"></component>
            <span class="ml-4">{{ item.title }}</span>
          </a-doption>
        </div>
      </template>
    </a-dropdown>

    <!-- 主页搜索 -->
    <SearchVue />
    <!-- 系统插件中心 -->
    <PluginVue />
    <!-- 应用中心 -->
    <SystemApplication />
    <!-- 顶部工具栏 -->
    <TopToolBar />
    <!-- 底部备案信息 -->
    <Copyright />

    <!-- 多开应用 -->
    <MultipleApplications />

    <!-- 欢迎 -->
    <WelcomeVue />

    <!-- 用户中心 -->
    <UserVue />
  </div>

  <!-- 小于1280的系统警告 -->
  <div class="app-phone">
    <PhoneApp />
  </div>
</template>

<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue';
  import systemStore from '@/store/modules/system/index';
  import {
    getFilter,
    getTheme,
    getWallpaper,
  } from '@/store/modules/system/utils';
  import { isImage } from '@/utils/reg';
  import { homePageContextmenu } from '@/static/functions';

  import PluginVue from '../plugins/PluginVue.vue';
  import SearchVue from './SearchVue.vue';
  import SystemApplication from './SystemApplication.vue';
  import { showFolder } from '../plugins/folder';
  import TopToolBar from './TopToolBar.vue';
  import Copyright from './Copyright.vue';
  import PhoneApp from '../phone/PhoneApp.vue';
  import MultipleApplications from '../multiple-applications/MultipleApplications.vue';
  import WelcomeVue from './WelcomeVue.vue';
  import UserVue from '../user/UserVue.vue';

  const wallpaperConfig = ref({
    scale: 1,
  });
  onMounted(() => {
    document.title = systemStore().config.setting.title;
    const body = document.querySelector('body');
    body?.style.setProperty('--arcoblue-6', getTheme());
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

  /**
   * todo: 文件拖拽
   *
   * */
  const fileDrop = (e: DragEvent) => {
    e.preventDefault();
    if (!e.dataTransfer) return;
    const { files } = e.dataTransfer;
    if (files.length > 0) {
      // eslint-disable-next-line no-plusplus
      for (let index = 0; index < files.length; index++) {
        const image = files[index];
        if (isImage(image.name)) {
          showFolder(image);
        }
      }
    }
  };

  const onWallpaperWheel = (e: WheelEvent) => {
    if (e.deltaY > 0) wallpaperConfig.value.scale = 1.2;
    else {
      wallpaperConfig.value.scale = 1;
    }
  };
</script>

<style lang="scss" scoped>
  .home-page {
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    // filter:brightness()
    .wallpaper {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      background-color: #eee;
      transition: transform 0.2s !important;
    }
  }
  @media screen and (max-width: 1280px) {
    .home-page {
      display: none;
    }
  }
  @media screen and (min-width: 1279px) {
    .app-phone {
      display: none;
    }
    .home-page {
      display: initial;
    }
  }
</style>
