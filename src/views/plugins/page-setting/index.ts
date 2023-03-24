import { ref } from 'vue';

export const show = ref();

export const trigglePageSetting = (flag: boolean) => {
  show.value = flag;
};
export const openPageSetting = () => {
  show.value = true;
};
export const closePageSetting = () => {
  show.value = false;
};
