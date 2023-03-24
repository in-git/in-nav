/*
<button v-clickoutside="clickoutside">点击</button>
 clickoutside(){
 }
*/

export default {
  beforeMount(el: HTMLElement, binding: { value: () => void }) {
    function click(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (!el.contains(target)) {
        binding.value();
      }
    }
    document.addEventListener('click', click);
  },
};
