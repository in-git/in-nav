<template>
  <InDraggable
    v-if="folderConfig.show"
    title="文件中心"
    width="800px"
    height="500px"
    left="calc(40vw - 400px)"
    top="calc(50vh - 250px)"
    @on-close="folderConfig.show = false"
  >
    <div class="px-8 py-8">
      <div class="flex justify-between align-center">
        <div>
          <a-button
            size="mini"
            :disabled="!activeFile"
            @click="setToWallpaper()"
            >设为壁纸</a-button
          >
        </div>
        <a-button
          :disabled="!activeFile"
          status="danger"
          size="mini"
          @click="delFile"
          >删除</a-button
        >
      </div>
      <a-divider class="my-12" />
      <a-grid :cols="8" :col-gap="12" :row-gap="16">
        <a-grid-item
          v-for="item in folderConfig.fileList"
          :key="item.name"
          class="cursor-pointer file-item flex flex-s text-center"
          :class="{ 'file-active': activeFile.name == item.name }"
          @click="selectFile(item)"
        >
          <div v-if="isImage(item.name)" @dblclick="openImage(item)">
            <a-popover title="图片预览" trigger="click" position="bl">
              <div class="w-100 h-100">
                <icon-image class="text-32 text-777" />
                <div class="text-12 text-777 file-name" style="width: 80px">
                  {{ item.name }}
                </div>
              </div>
              <template #content>
                <div style="width: 100px" class="flex flex-s preview-image">
                  <img :src="activeFile.imgSrc" class="w-100 h-100" />
                </div>
              </template>
            </a-popover>
          </div>
          <div v-else>
            <icon-folder class="text-32" />
            <div class="text-12 text-777 file-name" style="width: 80px">
              {{ item.name }}
            </div>
          </div>
        </a-grid-item>
      </a-grid>
    </div>
    <div class="files-info text-12 text-999">
      当前共有 <a-tag>{{ folderConfig.fileList.length }}</a-tag> 个文件
    </div>
  </InDraggable>
</template>

<script setup lang="ts">
  import InDraggable from '@/components/draggable/InDraggable.vue';
  import { setWallpaper } from '@/store/modules/system/utils';
  import { toBase64 } from '@/utils/file';
  import { isImage } from '@/utils/reg';
  import { ref } from 'vue';
  import { showImage } from '../image';

  import { deleteFile, folderConfig } from './index';

  const activeFile = ref({
    name: '',
    imgSrc: '',
  });
  /**
   * todo: 设成壁纸
   *
   * */
  const setToWallpaper = async () => {
    const current = activeFile.value;
    const file = folderConfig.fileList.find((el) => {
      if (el.name === current.name) {
        return el;
      }
      return null;
    });
    if (!file) return;
    const src = await toBase64(file);

    setWallpaper({
      src,
      type: 'image',
    });
  };

  /**
   * todo:选择文件
   *
   * */

  const selectFile = async (item: File) => {
    const src = await toBase64(item);
    activeFile.value.imgSrc = src;
    activeFile.value.name = item.name;
  };
  /**
   * todo:
   *
   * */
  const openImage = async (file: File) => {
    const src = await toBase64(file);
    showImage(src, file.size);
  };

  /**
   * todo: 删除一个文件
   *
   * */
  const delFile = () => {
    deleteFile(activeFile.value.name);
  };
</script>

<style lang="scss" scoped>
  .file-item {
    color: #fca311;
    height: 80px;
    border-radius: 8px;
    border: 1px solid transparent;
    user-select: none;
    &:hover {
      background-color: #eee;
    }
    .file-name {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      max-width: 60px;
    }
  }
  .file-active {
    border: 1px solid rgb(var(--primary-6));
    color: rgb(var(--primary-6));
  }
  .files-info {
    position: absolute;
    bottom: 20px;
    left: 20px;
  }
  .preview-image {
    max-height: 300px;
    img {
      object-fit: contain;
    }
  }
</style>
