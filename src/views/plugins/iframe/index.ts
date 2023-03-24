import { reactive } from 'vue';

export const iframeConfig = reactive({
  show: false,
  src: '',
});

export const showIframe = (src: string) => {
  iframeConfig.show = true;
  iframeConfig.src = src;
};
