<template>
  <div
    v-if="getWelcome()"
    v-draggable="true"
    class="welcome flex flex-col p-14"
  >
    <div class="header py-6 cursor-move text-16 text-bold" data-drag>
      首次访问说明
    </div>
    <a-divider class="mb-16 mt-8" />
    <div class="welcome-body flex-1 p-8 flex flex-col">
      <div class="flex-1 flex flex-s">
        <div class="text-20 w-80 text-center">
          {{ tips[current] }}
        </div>
      </div>
      <div class="flex justify-center gc-4">
        <a-button
          status="success"
          :disabled="current === tips.length - 1"
          @click="nextStep"
          >下一条</a-button
        >
        <a-button @click="close">关闭</a-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { getWelcome, setWelcome } from '@/store/modules/system/utils';
  import { ref } from 'vue';

  const tips = [
    'chatGPT在最上面的工具栏,其他工具在右下角',
    '桌面支持鼠标右键,可以拖拽文件到主页试试，解锁更多功能',
    '浏览器支持多开,更多功能去探索吧',
  ];
  const current = ref(0);
  const nextStep = () => {
    if (current.value < tips.length - 1) {
      current.value += 1;
    }
  };

  const close = () => {
    setWelcome(false);
  };
</script>

<style lang="scss" scoped>
  .welcome {
    position: fixed;
    width: 600px;
    height: 40vh;
    left: calc(50vw - 300px);
    top: 30vh;
    background-color: white;
    z-index: 10;
    border-radius: 12px;
    box-shadow: 0 0 15px gray;
    .welcome-body {
      background-color: #eee;
      border-radius: 8px;
    }
  }
</style>
