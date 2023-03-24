<template>
  <InDraggable
    v-if="commandConfig.show"
    title="命令行"
    width="900px"
    height="500px"
    class="command"
    @on-close="commandConfig.show = false"
  >
    <div class="h-100 cmd-content" @click="onFocus">
      <div v-for="item in commandConfig.content" :key="item" class="text-12">
        {{ item }}
      </div>
      <div class="flex">
        <div class="flex align-center">
          <span class="text-nowrap text-12">[javascript]:</span>
        </div>
        <input
          ref="commandInput"
          v-model="command"
          v-focus
          type="text"
          class="w-100"
          @keydown.enter="comfirm"
        />
      </div>
    </div>
  </InDraggable>
</template>

<script setup lang="ts">
  import InDraggable from '@/components/draggable/InDraggable.vue';
  import { openLink } from '@/utils/utils';
  import { nextTick, ref } from 'vue';
  import { cmdList, commandConfig } from '.';

  const commandInput = ref();
  const command = ref('');
  const prefixText = `[javascript]:`;

  /**
   * todo: 让input聚焦
   *
   * */
  const onFocus = () => {
    const el = commandInput.value as HTMLInputElement;
    el.focus();
  };
  /**
   * todo: 滑动到底部
   *
   * */
  function scrollToBottom() {
    const cmdContent = document.querySelector('.cmd-content');
    cmdContent?.scrollTo({
      top: cmdContent.scrollHeight,
    });
    command.value = '';
  }
  /**
   * todo: 添加命令
   *
   * */
  const addCommand = (cmd: string) => {
    commandConfig.content.push(prefixText + cmd);
    nextTick(() => {
      scrollToBottom();
    });
  };
  /* 按下确定 */
  function comfirm() {
    const isCmd = cmdList.every((e) => {
      return command.value.includes(e);
    });
    if (isCmd) {
      const keyword = command.value.split(' ');
      const cmd = keyword[0];
      const parma = keyword[1];
      if (keyword.length < 2) {
        addCommand(`命令不合法`);
        return;
      }
      switch (cmd) {
        case 'goto': {
          if (!parma) {
            return;
          }
          addCommand(`goto ${parma}`);
          openLink(parma);
          break;
        }

        default:
          break;
      }
      return;
    }
    try {
      // eslint-disable-next-line no-eval
      const res = window.eval(command.value);

      if (!res) {
        commandConfig.content.push(prefixText);
      } else {
        const commandText = `[javascript]:${command.value}`;
        commandConfig.content.push(commandText);
        commandConfig.content.push(res);
      }
    } catch (error: any) {
      commandConfig.content.push(error);
    }
    command.value = '';
    nextTick(() => {
      scrollToBottom();
    });
  }
</script>

<style lang="scss" scoped>
  .command {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .cmd-content {
      overflow-y: auto;
      background-color: black;
      color: white;
      white-space: pre-wrap;
      user-select: text !important;
    }
    input {
      padding: 0;
      outline: none;
      border: none;
      color: white;
      background-color: transparent;
      margin: 0;
      font-family: unset;
      font-size: 12px;
    }
  }
</style>
