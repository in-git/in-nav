import { ref, reactive } from 'vue';

export const memoConfig = reactive({
  show: false,
});
export const triggleMemo = (flag: boolean) => {
  memoConfig.show = flag;
};
