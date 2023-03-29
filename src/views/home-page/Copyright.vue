<template>
  <div class="memo flex justify-center">
    <div class="px-12">
      {{ memo }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { getMemo } from '@/store/modules/system/utils';
  import { computed } from 'vue';

  const memo = computed(() => {
    return getMemo();
  });
</script>

<style lang="scss" scoped>
  .memo {
    color: white;
    position: fixed;
    width: 100vw;
    bottom: 0;
    font-size: 12px;
    div {
      background-color: #33333380;
      border-radius: 2px;
    }
  }
</style>
