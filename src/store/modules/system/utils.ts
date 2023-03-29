import { storeToRefs } from 'pinia';
import systemStore from './index';
import { backgroundImageType } from './types';

export const setWallpaper = (image: backgroundImageType) => {
  const store = storeToRefs(systemStore());
  store.config.value.backgroundImage = image;
};

/* 获取壁纸 */
export const getWallpaper = () => {
  return storeToRefs(systemStore()).config.value.backgroundImage;
};

/* 获取滤镜 */
export const getFilter = () => {
  return storeToRefs(systemStore()).config.value.filter;
};

/* 重置滤镜 */
export const resetFilter = () => {
  storeToRefs(systemStore()).config.value.filter = {
    /* 透明度 */
    opacity: 0,
    /* 模糊度 */
    blur: 0,
    /* 灰度 */
    grayscale: 0,
    /* 亮度 */
    brightness: 0,
  };
};
export const getSetting = () => {
  return storeToRefs(systemStore()).config.value.setting;
};

export const getTheme = () => {
  return storeToRefs(systemStore()).config.value.theme;
};
export const setTheme = (color: string) => {
  storeToRefs(systemStore()).config.value.theme = color;
};
export const getMemo = () => {
  return storeToRefs(systemStore()).config.value.memo;
};
export const setMemo = (memo: string) => {
  if (!memo) return;
  storeToRefs(systemStore()).config.value.memo = memo;
};

export const getWelcome = () => {
  return storeToRefs(systemStore()).config.value.welcome;
};
export const setWelcome = (value: boolean) => {
  storeToRefs(systemStore()).config.value.welcome = value;
};
