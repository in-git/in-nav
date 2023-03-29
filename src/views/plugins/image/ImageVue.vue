<template>
  <div ref="imageContainer">
    <VueDraggable
      v-model:show="imageConfig.show"
      :x="position.x"
      :y="position.y"
      :w="wh.w"
      :h="wh.h"
      title="图片处理"
    >
      <div class="image-container h-100 flex flex-s">
        <a-image
          v-if="imageConfig.src"
          width="400"
          :src="imageConfig.src"
          :style="style"
        ></a-image>
        <div v-else>
          <a-button type="primary" @click="uploadFile">上传图片</a-button>
        </div>
      </div>

      <!-- 操作 -->
      <div
        class="image-tools px-24 flex align-center gc-8 justify-between"
        :class="{ 'no-image': !imageConfig.src }"
      >
        <div>
          <a-button shape="circle" type="text" @click="zoomOut">
            <icon-plus />
          </a-button>
        </div>
        <div>
          <a-button shape="circle" type="text" @click="zoomIn">
            <icon-minus />
          </a-button>
        </div>
        <div>
          <a-button shape="circle" type="text" @click="rotate">
            <icon-sync />
          </a-button>
        </div>
        <div>
          <a-popover title="图片信息" trigger="click">
            <a-button shape="circle" type="text" @click="getImageInfo">
              <icon-info
            /></a-button>
            <template #content>
              <div style="width: 160px" class="flex flex-col gr-4 text-12">
                <ADivider class="my-4" />
                <div class="flex justify-between align-center">
                  <span>分辨率</span>
                  <span>
                    <a-tag>
                      {{ imageStyle.width }} x {{ imageStyle.height }}
                    </a-tag>
                    px
                  </span>
                </div>

                <div class="flex justify-between align-center">
                  <span>大小</span>
                  <span>
                    <a-tag>
                      {{ imageConfig.size }}
                    </a-tag>
                    byte
                  </span>
                </div>
              </div>
            </template>
          </a-popover>
        </div>
        <div>
          <a-dropdown position="bl">
            <a-button size="mini">
              下载
              <icon-download />
            </a-button>
            <template #content>
              <div>
                <a-doption @click="downloadImage">
                  <span class="text-12 text-666">转PNG下载</span>
                </a-doption>
                <a-doption class="text-12" @click="downloadBase64">
                  <span class="text-12 text-666">转BASE64下载</span>
                </a-doption>
              </div>
            </template>
          </a-dropdown>
        </div>
      </div>
    </VueDraggable>
  </div>
</template>

<script setup lang="ts">
  import VueDraggable from '@/components/draggable/VueDraggable.vue';
  import useToCenter from '@/hooks/tocenter';
  import {
    base64ToBlob,
    downloadExportFile,
    srcToBase64,
    toBase64,
    useUploadFile,
  } from '@/utils/file';
  import { isImage } from '@/utils/reg';
  import { downloadText } from '@/utils/utils';
  import { nanoid } from 'nanoid';
  import {
    computed,
    nextTick,
    onMounted,
    onUnmounted,
    reactive,
    ref,
  } from 'vue';

  import { imageConfig } from './index';

  const imageStyle = reactive({
    scale: 1,
    rotate: 0,
    width: 0,
    height: 0,
  });
  const imageContainer = ref();

  /**
   * todo: 获取图片信息
   *
   * */
  const getImageInfo = async () => {
    const image = new Image();
    image.src = imageConfig.src;
    image.onload = () => {
      imageStyle.width = image.width;
      imageStyle.height = image.height;
    };
  };

  /**
   * todo: 下载
   *
   * */
  const downloadImage = async () => {
    const base64 = await srcToBase64(imageConfig.src);
    const blob = base64ToBlob(base64, 'png');
    downloadExportFile(blob, 'file', 'png');
  };
  /* 下载base64 */
  const downloadBase64 = async () => {
    const base64 = await srcToBase64(imageConfig.src);
    downloadText(base64, `${nanoid().slice(0, 8)}.txt`);
  };
  /* 缩放 */
  const zoomIn = () => {
    if (imageStyle.scale > 0) {
      imageStyle.scale -= 0.2;
    }
    if (imageStyle.scale <= 0) {
      imageStyle.scale = 0.1;
    }
  };
  const zoomOut = () => {
    if (imageStyle.scale < 12) imageStyle.scale += 0.2;
  };

  const style = computed(() => {
    return {
      transform: `scale(${imageStyle.scale}) rotate(${imageStyle.rotate}deg)`,
    };
  });
  const rotate = () => {
    imageStyle.rotate += 45;
  };

  /**
   * todo: 上传文件
   *
   * */
  const uploadFile = async () => {
    const file = await useUploadFile();
    if (isImage(file.name)) {
      imageConfig.src = await toBase64(file);
    }
  };
  /**
   * todo:鼠标滚轮放大
   *
   * */
  const wheelEvent = (e: WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      zoomIn();
    } else {
      zoomOut();
    }
  };
  onMounted(() => {
    nextTick(() => {
      const el = imageContainer.value as HTMLElement;
      if (!el) return;
      el.addEventListener('wheel', wheelEvent);
    });
  });

  onUnmounted(() => {
    const el = imageContainer.value as HTMLElement;
    if (!el) return;
    el.removeEventListener('wheel', wheelEvent);
  });

  const { position, wh } = useToCenter(900, 600);
</script>

<style lang="scss" scoped>
  .image-container {
    background-color: #333;
    overflow: hidden;
  }
  img {
    object-fit: contain;
  }
  .image-tools {
    position: absolute;
    width: 40%;
    background-color: white;
    bottom: 20px;
    padding: 4px 0;
    left: 30%;
    border-radius: 10px;
  }
  .no-image {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
</style>
