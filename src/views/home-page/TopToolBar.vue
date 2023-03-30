<template>
  <div v-clickoutside="close" class="top-toolbar flex align-center flex flex-s">
    <div v-if="mode" class="expand-bar flex flex-s">
      <ul class="w-100 flex justify-center gc-4">
        <li
          v-for="item in linkList[1].list"
          :key="item.title"
          class="cursor-pointer flex flex-s"
          @click="openIframe(item.src)"
        >
          <a-tooltip :content="item.title" position="bottom">
            <div class="w-100 h-100 flex flex-s">
              <img :src="item.icon" />
            </div>
          </a-tooltip>
        </li>
      </ul>
    </div>
    <div v-else class="mini-bar flex flex-s" @click.stop="mode = true">
      <div class="line"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { linkList } from '@/static/website';
  import { ref } from 'vue';
  import { addBrowser } from '../multiple-applications';

  const mode = ref(false);
  const close = () => {
    mode.value = false;
  };

  /**
   * todo:
   *
   * */
  const openIframe = (src: string) => {
    close();
    addBrowser(src);
  };
</script>

<style lang="scss" scoped>
  .top-toolbar {
    position: fixed;
    width: 100%;
    left: 0;

    .expand-bar {
      width: 40vw;
      height: 42px;
      background-color: #171717;
      border-bottom-right-radius: 30px;
      border-bottom-left-radius: 30px;
      li {
        height: 32px;
        width: 32px;
        border-radius: 4px;
        img {
          background-color: white;
          border-radius: 50%;
          padding: 6px;
          width: 30px;
          height: 30px;
        }
      }
    }
    .mini-bar {
      width: 20vw;
      background-color: #171717;
      height: 10px;
      position: relative;
      border-bottom-right-radius: 25px;
      border-bottom-left-radius: 25px;
      cursor: pointer;
    }
    .line {
      width: 20%;
      background-color: white;
      height: 2px;
      border-radius: 4px;
      overflow: hidden;
    }
  }
</style>
