import { defineStore } from 'pinia';

// 1.定义容器
// 参数1： 容器的ID，必须唯一，将来pinia会把所有容器挂载到根容器
// 参数2： 选项对象

export default defineStore('system', {
  state: () => {
    return {
      config: {
        backgroundImage: {
          type: 'linear',
          src: '0deg, #D9AFD9 0%, #97D9E1 100%',
        },
        /* 页面滤镜 */
        filter: {
          /* 透明度 */
          opacity: 0,
          /* 模糊度 */
          blur: 0,
          /* 灰度 */
          grayscale: 0,
          /* 亮度 */
          brightness: 0,
        },

        setting: {
          /* 页面标题 */
          title: '轻音',
          /* 网页图标 */
          icon: '',
        },
        theme: '',
        memo: `十三万年也好，三十万年也罢，我愿意在这桃渊林，一世相等`,
        // 春分、清明、立夏、小满、夏至、大暑、立秋、白露、秋分、寒露、立冬、小雪、冬至
        version: '春分',
        welcome: true,
      },
    };
  },
  persist: true,
});
