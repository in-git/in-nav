<template>
  <div class="copyright flex justify-center">
    <div class="px-12">
      {{ copyright }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { getCopyright } from '@/store/modules/system/utils';
  import { computed } from 'vue';

  const copyright = computed(() => {
    return getCopyright();
  });
</script>

<style lang="scss" scoped>
  .copyright {
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
