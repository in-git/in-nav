import { ref } from 'vue';

export const pageAboutConfig = ref();

export const showPageAbout = () => {
  pageAboutConfig.value = true;
};
