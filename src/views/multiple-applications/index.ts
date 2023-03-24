import { Component, markRaw, ref } from 'vue';
import BrowserVue from './browser/BrowserVue.vue';

type BrowserType = {
  title: string;
  component: Component;
  show: boolean;
  src: string;
};
export const browserList = ref<Array<BrowserType>>([]);

export const addBrowser = (src: string) => {
  browserList.value.push({
    title: '标题',
    component: markRaw(BrowserVue),
    show: true,
    src,
  });
};
