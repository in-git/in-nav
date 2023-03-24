<template>
  <VueDraggable
    v-if="show"
    :x="x"
    :y="y"
    :w="w"
    :h="h"
    :min-w="200"
    :min-h="300"
    :resizable="resizable"
    :draggable="dragConfig.draggable"
    class-name-handle="drag-handle"
    class="flex flex-col"
    :parent="parent"
  >
    <div
      class="drag-header flex justify-between align-center px-8 gc-12"
      @mousedown="dragConfig.draggable = true"
      @mouseup="dragConfig.draggable = false"
    >
      <slot name="title">
        <div class="text-white text-nowrap">{{ title }}</div>
      </slot>
      <slot name="hander"></slot>
      <div class="flex gc-4">
        <slot name="more"></slot>
        <a-button
          size="small"
          class="close-button"
          shape="circle"
          @click="onClose"
          @mousedown.stop="() => false"
        >
          <icon-close />
        </a-button>
      </div>
    </div>
    <div class="flex-1">
      <slot></slot>
    </div>
  </VueDraggable>
</template>

<script setup lang="ts">
  import { onMounted, reactive, ref, useSlots } from 'vue';
  import VueDraggable from 'vue3-draggable-resizable';
  import './draggable.scss';

  const props = defineProps({
    h: {
      type: Number,
      default: 300,
    },
    y: {
      type: Number,
      default: 300,
    },
    x: {
      type: Number,
      default: 300,
    },
    w: {
      type: Number,
      default: 200,
    },
    resizable: {
      type: Boolean,
      default: true,
    },
    parent: {
      type: Boolean,
      default: false,
    },
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
  });
  const emits = defineEmits(['onClose', 'update:show']);
  const dragConfig = reactive({
    draggable: false,
  });

  const slotTest = ref(false);
  /* 检测 "more" 插槽中是否传值过来了 */
  onMounted(() => {
    slotTest.value = !!useSlots().more;
  });
  /**
   * todo:关闭时触发
   *
   * */
  const onClose = () => {
    emits('onClose');
    emits('update:show', !props.show);
  };
</script>

<style lang="scss" scoped>
  .drag-header {
    line-height: $drag-header-height;
    border-bottom: 1px solid #eee;
    background-color: #171717;
    height: $drag-header-height;
  }
  .close-button {
    background-color: transparent !important;
    color: white;
    &:hover {
      background-color: #ff4d6d !important;
      color: white !important;
    }
  }
</style>
