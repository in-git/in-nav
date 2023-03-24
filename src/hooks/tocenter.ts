import { computed, ref } from 'vue';

export default function useToCenter(w: number, h: number) {
  const wh = ref({
    w,
    h,
  });
  return {
    position: computed(() => {
      return {
        x: window.innerWidth / 2 - wh.value.w / 2,
        y: window.innerHeight / 2 - wh.value.h / 2,
      };
    }),
    wh,
  };
}
