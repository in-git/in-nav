<template>
  <VueDraggable
    v-model:show="notepadConfig.show"
    :x="position.x"
    :y="position.y"
    :w="notepadInfo.w"
    :h="notepadInfo.h"
  >
    <template #title>
      <span class="text-white">
        <icon-bookmark class="mr-6" />
        <span>记事本</span>
      </span>
    </template>
    <template #hander>
      <div class="notepad-title" @mousedown.stop>
        <input v-model="notepadConfig.title" v-focus placeholder="请输入标题" />
      </div>
    </template>
    <!-- 核心 -->
    <div class="notepad-actions gc-4 flex align-center">
      <a-dropdown :popup-max-height="false" position="bl">
        <a-button type="text" size="medium" style="color: #333">
          <span>文件</span>
          <icon-down />
        </a-button>
        <template #content>
          <div class="mx-12">
            <!-- <a-doption><icon-save /> 保存</a-doption> -->
            <a-doption @click="clear"><icon-delete /> 清空</a-doption>
          </div>
        </template>
      </a-dropdown>
    </div>
    <div ref="notepad" class="notepad-content pt-4 w-100 flex-1">
      <textarea
        v-model="notepadConfig.content"
        v-focus
        class="px-8 h-100 in-scrollbar"
        autocomplete="off"
        placeholder="在这里输入文字"
      ></textarea>
    </div>
    <!-- 保存 -->
    <div class="notepad-save">
      <a-tooltip content="保存">
        <a-button
          shape="circle"
          :disabled="notepadConfig.content.length <= 0"
          type="primary"
          @click="save"
        >
          <IconSave />
        </a-button>
      </a-tooltip>
    </div>
    <!-- save tips -->
    <div class="absolute w-100 save-tips">
      <a-alert v-if="alert" banner type="success" closable> 操作成功 </a-alert>
    </div>
  </VueDraggable>
</template>

<script setup lang="ts">
  import VueDraggable from '@/components/draggable/VueDraggable.vue';
  import { addNotepad } from '@/store/modules/app/utils';
  import { formatDate } from '@/utils/utils';
  import { computed, onUnmounted, ref } from 'vue';
  import { notepadConfig, showNotepad } from '.';

  const notepad = ref();

  const alert = ref(false);
  let flag: any = 0;
  const notepadInfo = ref({
    w: 900,
    h: 600,
  });
  function save() {
    if (notepadConfig.content.length <= 0) {
      return;
    }
    if (notepadConfig.title.length === 0) {
      notepadConfig.title = notepadConfig.content.slice(0, 4);
    }
    addNotepad({
      content: notepadConfig.content,
      id: notepadConfig.id,
      title: notepadConfig.title,
      date: formatDate(new Date()),
    });
    alert.value = true;
    flag = setTimeout(() => {
      alert.value = false;
      clearTimeout(flag);
    }, 3000);
  }

  /**
   * todo:清除
   *
   * */
  const clear = () => {
    showNotepad();
  };
  /**
   * todo:ctrl+s保存
   *
   * */
  const keydown = (evt: KeyboardEvent) => {
    if (evt.key === 's' && evt.ctrlKey) {
      save();
      evt.preventDefault();
    }
  };
  window.addEventListener('keydown', keydown);
  onUnmounted(() => {
    window.removeEventListener('keydown', keydown);
  });
  const position = computed(() => {
    return {
      x: window.innerWidth / 2 - notepadInfo.value.w / 2,
      y: window.innerHeight / 2 - notepadInfo.value.h / 2,
    };
  });
</script>

<style lang="scss" scoped>
  .notepad-content {
    outline: none;
    height: calc(100% - 42px);
    textarea {
      outline: none;
      border: none;
      resize: none;
      padding: 0;
      width: calc(100% - 8px);
    }
  }
  .notepad-actions {
    height: 32px;
    line-height: 32px;
    background-color: #eee;
    margin: 0;
  }
  .save-tips {
    top: 42px;
  }
  .notepad-save {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
  .notepad-title {
    input {
      padding: 0;
      line-height: 24px;
      text-align: center;
      margin: 0;
      outline: none !important;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #eee;
      color: white;
    }
  }
</style>
