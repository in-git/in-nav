<template>
  <div class="search-input flex flex-s">
    <div class="w-80 flex input-container align-center">
      <div class="page-icon flex flex-s">
        <a-popover
          v-model:popup-visible="hidEnginePopover"
          trigger="click"
          position="bl"
        >
          <div class="cursor-pointer flex flex-s">
            <img :src="currentIcon" width="24" />
          </div>
          <template #content>
            <div class="flex gc-8">
              <div
                v-for="item in searchEngine"
                :key="item.title"
                class="engine-list"
                @click="selectEngine(item)"
              >
                <div class="text-center cursor-pointer">
                  <div class="image-container flex flex-s">
                    <img :src="`${ICON_API}${item.src}`" width="24" />
                  </div>
                  <div class="text-999 text-12">{{ item.title }}</div>
                </div>
              </div>
            </div>
          </template>
        </a-popover>
      </div>
      <div class="flex-1">
        <!-- 搜索框 -->
        <input
          v-model="keywords"
          type="text"
          placeholder="请输入关键字进行搜索"
          autocomplete="off"
          @keydown.enter="search"
        />
      </div>
      <div class="search-icon h-100 flex flex-s" @click="search">
        <icon-search style="font-size: 24px" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { getEngineSrc, setEngineSrc } from '@/store/modules/app/utils';
  import { isUrl } from '@/utils/reg';
  import { openLink } from '@/utils/utils';
  import { computed, ref } from 'vue';

  type enginType = {
    src: string;
    title: string;
  };
  const ICON_API = `https://api.xinac.net/icon/?url=`;
  const searchEngine = ref([
    {
      src: 'https://www.baidu.com/s?wd=',
      title: '百度',
    },
    {
      src: 'https://www.google.com/search?q=',
      title: '谷歌',
    },
  ]);
  /* 当前搜索引擎 */
  const currentEngine = computed(() => {
    return getEngineSrc();
  });
  /* 弹出框 */
  const hidEnginePopover = ref(false);
  /* 设定搜索引擎 */
  const selectEngine = (item: enginType) => {
    setEngineSrc(item.src);
    hidEnginePopover.value = false;
  };
  /* 获取当前引擎的ICON */
  const currentIcon = computed(() => {
    return ICON_API + currentEngine.value;
  });
  /* 关键字 */
  const keywords = ref('');
  /**
   * todo: 搜索
   *
   * */
  const search = () => {
    const flag = isUrl(keywords.value);
    if (flag) {
      openLink(keywords.value);
    } else {
      const link = currentEngine.value + keywords.value;
      openLink(link);
    }
  };
</script>

<style lang="scss" scoped>
  .engine-list {
    width: 60px;
    .image-container {
      $image-wh: 32px;
      img {
        width: $image-wh;
        height: $image-wh;
      }

      background-color: white;
    }
  }

  .search-input {
    position: fixed;
    width: 98vw;
    height: 100px;
    max-width: 400px;

    overflow: hidden;
    border-radius: 12px;
    z-index: 4;
    .input-container {
      height: 48px;
      border-radius: 48px;
      overflow: hidden;
      border: 1px solid #eee;
      background-color: white;
    }
    input {
      width: 100%;
      border: none;
      // border: 1px solid #eee;
      outline: none;
      height: 48px;
      background-color: transparent;
    }
    .search-icon {
      width: 48px;
      height: 48px;
      cursor: pointer;
      &:hover {
        background-color: rgb(var(--primary-6));
        color: white;
      }
    }
    .page-icon {
      width: 48px;
      height: 48px;
    }
  }
</style>
