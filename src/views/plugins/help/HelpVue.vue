<template>
  <VueDraggable
    v-model:show="helpConfig"
    :x="position.x"
    :y="position.y"
    :w="wh.w"
    :h="wh.h"
    title="帮助中心"
  >
    <div class="h-100 flex in-help mt-6 gc-4">
      <ul class="p-4 flex flex-col gr-4 text-12">
        <div class="text-999"><icon-list /> 视频列表 </div>
        <li
          v-for="(item, key) in videoList"
          :key="item.title"
          :class="{ active: key == active }"
          @click="selectItem(item, key)"
        >
          {{ item.title }}
        </li>
      </ul>
      <div class="flex-1 flex flex-s">
        <!-- <iframe
          v-show="loading"
          :src="currentVideo"
          scrolling="no"
          :border="0"
          frameborder="no"
          framespacing="0"
          allowfullscreen="true"
          class="w-100 h-100 p-8"
          marginheight="0"
          marginwidth="0"
          @load="canplay"
        >
        </iframe> -->

        <div class="w-100 h-100 flex flex-s loading"> 正在开发中,敬请期待 </div>
      </div>
    </div>
  </VueDraggable>
</template>

<script setup lang="ts">
  import VueDraggable from '@/components/draggable/VueDraggable.vue';
  import useToCenter from '@/hooks/tocenter';
  import { ref } from 'vue';

  import { helpConfig } from '.';

  const { position, wh } = useToCenter(600, 400);

  const videoList = ref([
    {
      title: '视频教程',
      // src: '//player.bilibili.com/player.html?aid=226065509&bvid=BV1Mb411Z7iS&cid=1056130808&page=1',
      src: '',
    },
  ]);
  const currentVideo = ref(videoList.value[0].src);

  const active = ref(0);
  const loading = ref(false);
  /**
   * todo: 选择某一项
   *
   * */
  const selectItem = (item: { src: string }, key: number) => {
    active.value = key;
    currentVideo.value = item.src;
  };

  /**
   * todo:iframe加载完触发
   *
   * */
  const canplay = () => {
    loading.value = true;
  };
</script>

<style lang="scss" scoped>
  .in-help {
    height: calc(100% - 12px);
    ul {
      width: 120px;
      border-left: 1px solid #eee;
      li {
        background-color: #eee;
        text-align: center;
        line-height: 32px;
        border-radius: 4px;
        cursor: pointer;
      }
      li.active {
        background-color: rgb(var(--arcoblue-6));
        color: white;
      }
    }
    iframe {
      border-radius: 14px;
      overflow: hidden;
      height: 100%;
    }
    .loading {
      background-color: #eee;
    }
  }
</style>
