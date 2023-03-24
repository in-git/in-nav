import { ref, reactive } from 'vue';

export const commandConfig = reactive({
  show: false,
  content: [
    `
命令提示：
   支持JS的所有命令:       alert('警告文字')
   打开页面:               goto 'http地址'
        `,
  ] as Array<string>,
});
export const setCommand = (content: string) => {
  if (content) {
    commandConfig.content.push(content);
  }

  commandConfig.show = true;
};

export const cmdList = ['goto'];
