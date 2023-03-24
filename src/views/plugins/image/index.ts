import { reactive } from 'vue';

export const imageConfig = reactive({
  show: false,
  src: '',
  size: 0,
});

export const showImage = (src: string, size = 0) => {
  imageConfig.show = true;
  imageConfig.src = src;
  imageConfig.size = size;
};
