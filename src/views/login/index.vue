<template>
  <div class="text-wrap">
    <PluginVue />
    <a-button @click="trigglePageSetting(true)">打开设置</a-button>
  </div>
</template>

<script setup lang="ts">
  import PluginVue from '../plugins/PluginVue.vue';
  import { trigglePageSetting } from '../plugins/page-setting';
</script>

<style lang="scss" scoped></style>
