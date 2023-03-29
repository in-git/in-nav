<template>
  <VueDraggable
    v-model:show="iframeConfig.show"
    :x="position.x"
    :y="position.y"
    :w="iframe.w"
    :h="iframe.h"
    title="浏览器"
  >
    <iframe
      :key="update"
      marginheight="0"
      marginwidth="0"
      :src="iframeConfig.src"
      frameborder="0"
      allowpaymentrequest="true"
      allowfullscreen
      target="_parent"
      allowTransparency="true"
    ></iframe>
    <template #hander>
      <div class="w-40 address-input">
        <input
          v-model.lazy="iframeConfig.src"
          v-focus
          class="w-100"
          @keydown.enter="goto"
          @mousedown.stop="() => false"
        />
      </div>
    </template>
    <template #more>
      <a-button
        shape="circle"
        size="small"
        class="bg-transparent"
        @click="fullscreen"
      >
        <icon-fullscreen />
      </a-button>
    </template>
  </VueDraggable>
</template>

<script setup lang="ts">
  import VueDraggable from '@/components/draggable/VueDraggable.vue';
  import useDragFullscreen from '@/hooks/fullscreen';
  import useToCenter from '@/hooks/tocenter';
  import { computed, ref } from 'vue';
  import { iframeConfig } from '.';

  const update = ref(0);
  const iframe = ref({
    w: 900,
    h: 600,
  });
  let flag = 0;
  /**
   * todo: 恢复
   *
   * */
  const revert = () => {
    iframe.value = {
      w: 900,
      h: 600,
    };
  };

  /**
   * todo: 全屏
   *
   * */
  const fullscreen = () => {
    // eslint-disable-next-line no-plusplus
    if (flag++ % 2 === 0) {
      iframe.value = useDragFullscreen();
    } else {
      revert();
    }
  };

  /**
   * todo: 内置跳转
   *
   * */
  const goto = () => {
    // eslint-disable-next-line no-plusplus
    update.value++;
  };
  const { position } = useToCenter(900, 600);
</script>

<style lang="scss" scoped>
  iframe {
    width: 100%;
    height: 100%;
    user-select: none;
  }
  iframe html body {
    margin: 0;
    padding: 0;
  }
  .bg-transparent {
    background-color: transparent;
  }
  .address-input {
    input {
      border-radius: 20px;
      overflow: hidden;
      border: none;
      outline: none;
      text-align: center;
      color: #999;
      line-height: 24px;
    }
  }
</style>
