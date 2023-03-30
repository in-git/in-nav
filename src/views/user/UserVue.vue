<template>
  <div class="in-user">
    <a-avatar
      :size="30"
      :style="{ backgroundColor: '#FFC72E' }"
      class="cursor-pointer"
      @click="showUserInfo = true"
    >
      <IconUser />
    </a-avatar>
    <div
      v-if="showUserInfo"
      v-draggable="true"
      class="user-info flex flex-col pb-32"
    >
      <div class="text-right mb-8 pt-8 px-24 cursor-move" data-drag>
        <a-button shape="circle" size="small" @click="showUserInfo = false">
          <IconClose />
        </a-button>
      </div>
      <!-- 基本信息 -->
      <div class="header text-center">
        <a-avatar :size="64">
          <IconUser />
        </a-avatar>
        <div class="mx-auto mt-16 relative nickname-container">
          <span v-if="!showEdit" class="nickname">
            <span v-if="userInfo.nickname.value.length > 0">
              {{ userInfo.nickname.value }}
            </span>
            <span v-else> 未设定昵称 </span>
          </span>
          <!-- 输入框 -->
          <input
            v-else
            v-model="userInfo.nickname.value"
            v-focus
            @keypress="showEdit = false"
            @blur="showEdit = false"
          />
          <IconEdit class="edit" @click="showEdit = !showEdit" />
        </div>
        <div class="mt-12 flex gc-4 justify-center">
          <a-button shape="circle" size="small" :disabled="true">
            <icon-wechat style="color: #06d6a0" />
          </a-button>
          <a-button shape="circle" size="small" :disabled="true">
            <icon-qq style="color: #00bbf9" />
          </a-button>
          <a-button shape="circle" size="small" :disabled="true">
            <icon-tiktok-color />
          </a-button>
        </div>
      </div>
      <a-divider> </a-divider>
      <div class="px-24">
        <ul class="flex base-info text-center w-80">
          <li>
            <div>草民</div>
            <div>身份</div>
          </li>
          <li>
            <div>0</div>
            <div>资产</div>
          </li>
          <li>
            <div>0</div>
            <div>人品</div>
          </li>
        </ul>
      </div>
      <a-divider> </a-divider>
      <div>
        <ul class="flex justify-around text-center w-80 mx-auto stage">
          <li
            v-for="item in stages"
            :key="item.text"
            class="p-4"
            @click="warning"
          >
            <div> <img :src="item.src" width="32" /></div>
            <span class="text-12 text-999">{{ item.text }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { getUserInfo } from '@/store/modules/user/utils';
  import { Message } from '@arco-design/web-vue';
  import { ref } from 'vue';

  const showUserInfo = ref(false);
  const userInfo = getUserInfo();

  const showEdit = ref(false);

  const stages = ref([
    {
      text: '商店',
      src: 'https://i.328888.xyz/2023/03/30/iCcGht.png',
    },
    {
      text: '学校',
      src: 'https://i.328888.xyz/2023/03/30/iCcH2x.png',
    },
    {
      text: '技能',
      src: 'https://i.328888.xyz/2023/03/30/iCcoTo.png',
    },
  ]);

  function warning() {
    Message.info('正在建设中');
  }
</script>

<style lang="scss" scoped>
  .in-user {
    position: fixed;
    top: 100px;
    right: 100px;
    box-shadow: $boxshadow;
    z-index: 20;
    border-radius: 50%;
    .user-info {
      position: absolute;
      top: 0;
      width: 300px;
      right: calc(100% + 10px);
      border-radius: 12px;
      background-color: #f8f8f8;
      box-shadow: $boxshadow;
    }
  }
  .mx-auto {
    margin: 0 auto;
  }
  .base-info {
    width: 100%;
    justify-content: space-around;
    li {
      & div:first-child {
        font-size: 14px;
        margin-bottom: 8px;
        font-weight: 600;
      }
      & div:last-child {
        font-size: 12px;
        color: #999;
      }
    }
  }
  .stage {
    li {
      width: 60px;
      cursor: pointer;
      border-radius: 4px;
      img {
        width: 30px;
        height: 30px;
      }
      &:hover {
        background-color: white;
      }
    }
  }
  .header {
    input {
      outline: none;
      padding: 0;
      margin: 0;
      width: 80px;
      text-align: center;
      font-size: 16px;
      color: #666;
      border: none;
      height: 26px;
      line-height: 26px;
      box-sizing: border-box;
      &:active {
        padding: 0;
        margin: 0;
      }
    }
    .nickname {
      display: inline-block;
      font-size: 16px;
      height: 26px;
      line-height: 26px;
      border: none;

      text-align: center;
      border: none;
      width: 80px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .nickname-container {
      height: 26px;
    }
    .edit {
      position: absolute;
      top: 4px;
    }
  }
</style>
