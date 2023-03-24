import { defineStore } from 'pinia';
import { INotepad } from './types';

const useAppStore = defineStore('app', {
  state: () => {
    return {
      notepadList: [] as Array<INotepad>,
      /* 搜搜引擎配置 */
      searchConfig: {
        /* 搜索引擎 */
        engineSrc: 'https://www.baidu.com/s?wd=',
        /* 搜索历史记录 */
        history: [],
      },
    };
  },
  persist: true,
});

export default useAppStore;
