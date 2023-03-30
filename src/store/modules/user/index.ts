import { defineStore } from 'pinia';
import { UserState } from './types';

const useUserStore = defineStore('user', {
  state: () => {
    return {
      nickname: '',
      qq: '',
      wechat: '',
      douyin: '',
    };
  },
  persist: true,
});

export default useUserStore;
