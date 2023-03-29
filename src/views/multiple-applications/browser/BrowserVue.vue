<template>
  <VueDraggable
    :show="show"
    :x="position.x"
    :y="position.y"
    :w="iframe.w"
    :h="iframe.h"
    title="浏览器"
    :resizable="true"
    @on-close="close"
  >
    <iframe
      :key="updateIframe"
      marginheight="0"
      marginwidth="0"
      :src="currentSrc"
      frameborder="0"
      allowpaymentrequest="true"
      allowfullscreen
      target="_parent"
      allowTransparency="true"
    ></iframe>
    <template #hander>
      <div class="w-40 address-input flex gc-4 align-center">
        <input
          v-model.lazy="currentSrc"
          v-focus
          class="w-100"
          @keydown.enter="goto"
          @mousedown.stop="() => false"
        />
        <icon-refresh
          class="text-16 cursor-pointer"
          style="color: white"
          @click="goto"
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
  import { computed, onMounted, ref, watch } from 'vue';

  const emit = defineEmits(['update:show']);
  const props = defineProps({
    title: String,
    src: String,
    show: Boolean,
  });
  const currentSrc = ref();
  const updateIframe = ref(0);
  watch(
    props,
    () => {
      currentSrc.value = props.src;
    },
    {
      immediate: true,
    }
  );

  /**
   * todo:
   *
   * */
  const close = () => {
    emit('update:show', false);
  };
  /* 用于刷新页面 */
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
    updateIframe.value++;
  };
  const position = computed(() => {
    return {
      x: window.innerWidth / 2 - iframe.value.w / 2,
      y: window.innerHeight / 2 - iframe.value.h / 2,
    };
  });
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
    background-color: transparent !important;
    &:hover {
      background-color: #eee !important;
    }
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
      min-width: 300px;
    }
  }
</style>
