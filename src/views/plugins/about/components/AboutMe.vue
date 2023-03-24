<template>
  <div class="about-me">
    <a-list size="small" :bordered="false" :max-height="280">
      <template #header> 音 [IN] </template>
      <a-list-item>
        <a-typography-paragraph
          copyable
          class="w-100 text-12 mb-0 flex justify-between"
        >
          <span>
            <icon-qq style="color: #3a86ff" class="mr-12 text-16" />
            <a-button type="dashed" size="mini">444891953</a-button>
          </span>
        </a-typography-paragraph>
      </a-list-item>
      <a-list-item>
        <a-typography-paragraph
          copyable
          class="w-100 mb-0 flex text-12 justify-between"
        >
          <span>
            <icon-email style="color: #ff006e" class="mr-12 text-16" />
            <a-button size="mini" type="dashed">444891953@qq.com</a-button>
          </span>
        </a-typography-paragraph>
      </a-list-item>
      <a-list-item v-for="item in links" :key="item.title">
        <div class="flex align-center justify-between">
          <div>
            <img
              :src="getWebIcon(item.href)"
              alt="bilibili"
              width="16"
              height="16"
              class="mr-12"
            />
            <a-button
              target="_blank"
              size="mini"
              :href="item.href"
              type="dashed"
            >
              {{ item.title }}
            </a-button>
          </div>
          <div>
            <a-button
              size="mini"
              target="_blank"
              shape="circle"
              :href="item.href"
            >
              <icon-arrow-right />
            </a-button>
          </div>
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>

<script setup lang="ts">
  import { getWebIcon } from '@/utils/api';

  const bilibili = `https://space.bilibili.com/301733306`;
  const links = [
    {
      href: 'https://space.bilibili.com/301733306',
      title: '哔哩哔哩',
    },
    {
      href: 'https://github.com/in-git',
      title: 'github',
    },
  ];
</script>

<style lang="scss" scoped>
  .about-me {
    height: 100%;
    overflow-y: auto;
  }
</style>
