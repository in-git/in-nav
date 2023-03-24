<template>
  <div
    v-draggable="draggable"
    class="in-draggable flex flex-col"
    :style="style"
    :class="{ 'z-front ': id === currentPluginId }"
    @click="setId"
  >
    <div data-drag class="drag-header flex align-center px-8 justify-between">
      <slot name="title">
        <span class="text-bold text-white">{{ title }}</span>
      </slot>
      <div class="flex gc-4">
        <a-popover v-if="slotTest" trigger="click" position="br">
          <a-button size="mini" shape="circle"><icon-more /> </a-button>
          <template #content>
            <slot name="more"></slot>
          </template>
        </a-popover>

        <a-button
          size="small"
          class="close-button"
          shape="circle"
          @click="onClose"
        >
          <icon-close />
        </a-button>
      </div>
    </div>
    <div class="drag-content in-scrollbar">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { currentPluginId } from '@/config/page.config';
  import { computed, onMounted, ref, useSlots } from 'vue';
  import { nanoid } from 'nanoid';

  const id = nanoid();

  function setId() {
    currentPluginId.value = id;
  }
  const slotTest = ref(false);
  /* 检测 "more" 插槽中是否传值过来了 */
  onMounted(() => {
    slotTest.value = !!useSlots().more;
  });

  const emits = defineEmits(['onClose']);
  const props = defineProps({
    width: {
      type: String,
    },
    height: String,
    left: String,
    top: String,
    title: String,
    position: {
      type: String,
      default: 'fixed',
    },
    draggable: {
      type: Boolean,
      default: true,
    },
  });
  /**
   * todo:关闭时触发
   *
   * */
  const onClose = () => {
    emits('onClose');
  };
  const style = computed(() => {
    const { width, height, left, top, position } = props;
    return {
      width,
      height,
      position: position as any,
      transform: ` translate(${left},${top})`,
    };
  });
</script>

<style lang="scss" scoped>
  $drag-header-height: 42px;
  .in-draggable {
    min-width: 200px;
    min-height: 100px;
    border-radius: 8px;
    overflow: hidden;
    top: 0;
    z-index: 10;
    .drag-header {
      height: $drag-header-height;
      border-bottom: 1px solid #eee;
      background-color: #171717;
    }
    .drag-content {
      user-select: text;
      background-color: white;
      flex: 1;
      overflow-y: auto;
    }
    box-shadow: 0px 0px 25px #0000001a;
  }
  .z-front {
    z-index: 100;
  }
  .close-button {
    background-color: transparent !important;
    color: white !important;
    &:hover {
      background-color: #ff4d6d !important;
      color: white !important;
    }
  }
</style>
