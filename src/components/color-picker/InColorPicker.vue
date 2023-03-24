<template>
  <div class="color-picker flex gc-4">
    <div
      v-for="item in colorList"
      :key="item"
      class="color-item flex flex-s cursor-pointer"
      :style="{ backgroundColor: `RGB(${item})` }"
      :class="{ active: props.active == item }"
      @click="selectColor(item)"
    >
      <div v-if="props.active === item" class="active"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const emits = defineEmits(['update:active', 'onSelect']);
  const colorList = ref([
    '153,90,255',
    '162,210,255',
    '255,125,0',
    '254,217,183',
    '239,71,111',
    '3,3,3',
  ]);
  const props = defineProps({
    active: String,
  });
  /**
   * todo: 选择颜色
   *
   * */
  const selectColor = (item: string) => {
    const body = document.querySelector('body');
    body?.style.setProperty('--arcoblue-6', item);
    emits('update:active', item);
    emits('onSelect', item);
  };
</script>

<style lang="scss" scoped>
  .color-item {
    $wh: 20px;
    width: $wh;
    height: $wh;
    background-color: 10px;
    border-radius: 50%;
    .active {
      $wh: 60%;
      width: $wh;
      background-color: white;
      height: $wh;
      border-radius: 50%;
    }
  }
</style>
