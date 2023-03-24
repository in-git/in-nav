import { ref } from 'vue';

export const helpConfig = ref(false);
export const showHelp = () => {
  helpConfig.value = true;
};
export const closeHelp = () => {
  helpConfig.value = false;
};
