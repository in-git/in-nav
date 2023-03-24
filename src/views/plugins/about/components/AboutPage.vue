<template>
  <div class="text-12 text-selected-none">
    <a-collapse :bordered="false" :default-active-key="[1]" accordion>
      <a-collapse-item key="1" header="发布行程">
        <a-timeline>
          <a-timeline-item
            v-for="item in list"
            :key="item.time"
            :label="item.time"
          >
            <span class="text-12">{{ item.content }}</span>
            <div class="text-12">
              版本号:
              <a-tag color="#38b000" size="small">{{ item.version }}</a-tag>
            </div>
          </a-timeline-item>
        </a-timeline>
      </a-collapse-item>
      <a-collapse-item key="2" header="技术手册">
        <div class="flex gc-4 flex-wrap gr-4">
          <a-tag v-for="item in techList" :key="item">
            {{ item }}
          </a-tag>
          <a-divider class="my-2" />
          <a-tooltip content="自研css库">
            <a-tag :color="randomGroupColor()">in-less</a-tag>
          </a-tooltip>
        </div>
      </a-collapse-item>

      <a-collapse-item key="3" header="信息安全">
        <div class="website-info text-12">
          本站将以 <a-tag color="#38b000">静态网页</a-tag> 的形式发布, 无需
          【登陆/注册】 所以根本不用担心数据安全问题
        </div>
      </a-collapse-item>
    </a-collapse>
  </div>
</template>

<script setup lang="ts">
  import { randomGroupColor } from '@/utils/color';
  import { ref } from 'vue';

  const list = [
    {
      time: '2023-03-20',
      content: '网页首发至gitee',
      dotColor: randomGroupColor(),
      version: '缘起',
    },
  ];
  const techList = ref([
    'vue3',
    'typescript',
    'arco.design',
    'pinia',
    'scss',
    'vue3-draggable-resizable',
  ]);
</script>

<style lang="scss" scoped>
  .website-info {
    background-color: white;
    padding: 4px 12px;
    line-height: 24px;
  }
</style>
