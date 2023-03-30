<template>
  <div class="app-item" @click="onClick">
    <img :src="src" alt="" />
    <div class="text-12 text-999 text-nowrap">
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
  /**
   * todo:
   *
   * */
  const props = defineProps({
    src: String,
    title: String,
  });
  const emit = defineEmits(['onClick']);
  const onClick = () => {
    emit('onClick');
  };
</script>

<style lang="scss" scoped>
  .app-item {
    height: 64px;
    width: 64px;
    border-radius: 4px;
    display: grid;
    place-items: center;
    img {
      $wh: 30px;
      background-color: white;
      border-radius: 50%;
      padding: 4px;
      width: $wh;
      height: $wh;
    }
    div {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>
