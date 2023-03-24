<template>
  <InDraggable
    v-if="memoConfig.show"
    title="备忘录"
    left="calc(80vw - 200px)"
    top="calc(50vh - 250px)"
    width="400px"
    height="500px"
    @on-close="memoConfig.show = false"
  >
    <div class="px-8 notepad-management pt-4">
      <ul class="notepad-list flex flex-col gr-4">
        <li
          v-for="item in notepadList"
          :key="item"
          class="flex justify-between py-8 px-8 align-center cursor-pointer text-selected-none"
          @dblclick="selectNotepad(item)"
        >
          <div>
            <div class="text-14">{{ item.title }}</div>
            <div class="text-999 text-12">{{ item.date }}</div>
          </div>
          <div class="flex gc-4">
            <a-tooltip content="打开">
              <a-button shape="circle" size="mini" @click="selectNotepad(item)">
                <icon-folder />
              </a-button>
            </a-tooltip>
            <a-popover :title="item.title">
              <a-button
                shape="circle"
                size="mini"
                @click="copyContent(item.content)"
              >
                <icon-copy />
              </a-button>
              <template #content>
                <div class="popover-content">{{ item.content }}</div>
              </template>
            </a-popover>
            <a-tooltip content="复制值"> </a-tooltip>
            <a-tooltip content="删除">
              <a-button
                shape="circle"
                size="mini"
                status="danger"
                @click="deleteNotepad(item)"
              >
                <icon-delete />
              </a-button>
            </a-tooltip>
          </div>
        </li>
      </ul>
      <!-- 新建 -->
      <a-tooltip content="新的备忘录">
        <div
          class="add-new border-circle cursor-pointer flex flex-s"
          @click="showNotepad()"
        >
          <a-button size="small" shape="circle" type="primary">
            <icon-plus class="text-18" style="color: white"
          /></a-button>
        </div>
      </a-tooltip>
    </div>
  </InDraggable>
</template>

<script setup>
  import InDraggable from '@/components/draggable/InDraggable.vue';
  import { getNotepadList, deleteNotepad } from '@/store/modules/app/utils';
  import { copyText } from '@/utils/utils';
  import { Message } from '@arco-design/web-vue';
  import { computed } from 'vue';
  import { showNotepad, selectNotepad } from '../notepad';
  import { memoConfig } from './index';

  const notepadList = computed(() => {
    return getNotepadList();
  });

  const copyContent = (text) => {
    copyText(text);
    Message.success('成功复制内容');
  };
</script>

<style lang="scss" scoped>
  .notepad-management {
    background-color: #eee !important;
    height: calc(100% - 4px);
    .notepad-list {
      li {
        background-color: white;
        border-radius: 4px;
      }
    }
    .add-new {
      position: absolute;
      bottom: 20px;
      right: 20px;
      width: 32px;
      height: 32px;
    }
  }
  .popover-content {
    display: -webkit-box;
    overflow: hidden;
    width: 200px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
</style>
