<template>
  <div class="base-config mt-4">
    <div class="text-999"> 页面基础配置 </div>
    <a-divider class="mt-14" />
    <div>
      <a-space size="medium" direction="vertical" fill>
        <a-row justify="space-between">
          <a-col :span="8">
            <div class="settings-title text-666"> 页面标题 </div>
          </a-col>
          <a-col :span="8">
            <div class="flex">
              <a-input
                v-model="getSetting().title"
                placeholder="输入页面标题"
                size="mini"
                allow-clear
              />
              <a-tooltip content="刷新页面生效">
                <a-button size="mini" @click="refreshPage">
                  <icon-refresh />
                </a-button>
              </a-tooltip> </div
          ></a-col>
        </a-row>
        <!-- 设置主题颜色 -->

        <a-row justify="space-between">
          <a-col :span="8">
            <div class="settings-title text-666">主题颜色</div></a-col
          >
          <a-col :span="8">
            <in-color-picker v-model:active="theme" @on-select="selectColor" />
          </a-col>
        </a-row>

        <!-- 设置底部版本信息 -->

        <a-row justify="space-between">
          <a-col :span="8">
            <div class="settings-title text-666">摘要</div>
          </a-col>
          <a-col :span="8">
            <a-input
              v-model.trim="memoTemp"
              placeholder="输入版权信息"
              :auto-size="{ minRows: 2, maxRows: 5 }"
              size="mini"
              allow-clear
              @press-enter="comfirm"
              @blur="comfirm"
            />
          </a-col>
        </a-row>

        <a-divider class="mt-12 mb-8" />
        <a-row justify="end">
          <a-col :span="8" class="text-right">
            <a-popconfirm
              content="将会丢失所有设置"
              type="error"
              @ok="resetSystem"
            >
              <a-button size="mini" status="danger">重置系统</a-button>
            </a-popconfirm>
          </a-col>
        </a-row>
      </a-space>
    </div>
  </div>
</template>

<script setup lang="ts">
  import InColorPicker from '@/components/color-picker/InColorPicker.vue';
  import {
    getMemo,
    getSetting,
    getTheme,
    setMemo,
    setTheme,
  } from '@/store/modules/system/utils';
  import { onMounted, ref } from 'vue';

  const memoTemp = ref();
  onMounted(() => {
    memoTemp.value = getMemo();
  });
  function comfirm() {
    setMemo(memoTemp.value);
  }
  /**
   * todo: 选择颜色
   *
   * */
  const selectColor = (color: string) => {
    setTheme(color);
  };
  const theme = ref(getTheme());
  /**
   * todo: 刷新页面
   *
   * */
  const refreshPage = () => {
    window.location.reload();
  };

  /**
   * todo: 重置系统
   *
   * */
  const resetSystem = () => {
    localStorage.clear();
    window.location.reload();
  };
</script>

<style lang="scss" scoped>
  .base-config {
    .settings {
      height: 32px;
    }
    .settings-title {
      font-size: 12px;
    }
  }
</style>
