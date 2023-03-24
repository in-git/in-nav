import { App } from 'vue';
import draggable from './draggable';
import clickoutside from './clickoutside';
import focus from './focus';

export default {
  install(Vue: App) {
    Vue.directive('draggable', draggable);
    Vue.directive('clickoutside', clickoutside);
    Vue.directive('focus', focus);
  },
};
