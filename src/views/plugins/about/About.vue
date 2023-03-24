<template>
  <div>
    <VueDraggable
      v-model:show="pageAboutConfig"
      :x="position.x"
      :y="position.y"
      :w="rectInfo.w"
      :h="rectInfo.h"
      title="关于"
      :resizable="false"
    >
      <div class="px-8 pt-4 flex-1 about-content">
        <a-tabs size="medium" class="h-100">
          <a-tab-pane key="1" title="关于作者">
            <AboutMe />
          </a-tab-pane>
          <a-tab-pane key="2" title="关于本页">
            <AboutPage />
          </a-tab-pane>
        </a-tabs>
      </div>
    </VueDraggable>
  </div>
</template>

<script setup lang="ts">
  import VueDraggable from '@/components/draggable/VueDraggable.vue';
  import { computed, ref } from 'vue';
  import { pageAboutConfig } from '.';
  import AboutMe from './components/AboutMe.vue';
  import AboutPage from './components/AboutPage.vue';

  const rectInfo = ref({
    w: 300,
    h: 400,
  });
  const position = computed(() => {
    return {
      x: window.innerWidth / 1.2 - rectInfo.value.w / 2,
      y: window.innerHeight / 2 - rectInfo.value.h / 2,
    };
  });
</script>

<style lang="scss" scoped>
  .about-content {
    overflow-y: auto;
    height: calc(100% - 4px);
  }
</style>
