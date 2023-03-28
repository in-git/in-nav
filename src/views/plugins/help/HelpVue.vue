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
        <iframe
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
        </iframe>
        <div v-show="!loading" class="w-100 h-100 flex flex-s loading">
          正在加载中
        </div>
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
      title: '壁纸设定',
      src: '//player.bilibili.com/player.html?aid=824201465&bvid=BV1Vg4y137XM&cid=1073592467&page=1',
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
