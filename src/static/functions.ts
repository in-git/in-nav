import { addBrowser } from '@/views/multiple-applications';
import { showPageAbout } from '@/views/plugins/about';
import { setCommand } from '@/views/plugins/command';
import { showImage } from '@/views/plugins/image';
import { showNotepad } from '@/views/plugins/notepad';
import { triggleMemo } from '@/views/plugins/notepad-management';
import { openPageSetting } from '@/views/plugins/page-setting';
import {
  IconBook,
  IconBookmark,
  IconCommand,
  IconGoogle,
  IconImage,
  IconInfoCircleFill,
  IconQuestionCircleFill,
  IconRefresh,
  IconSettings,
} from '@arco-design/web-vue/es/icon';
import { markRaw, ref } from 'vue';
import { showHelp } from '../views/plugins/help/index';

export const homePageContextmenu = ref([
  {
    title: '备忘录',
    icon: markRaw(IconBook),
    event() {
      triggleMemo(true);
    },
  },
  {
    title: '记事本',
    icon: markRaw(IconBookmark),
    event() {
      showNotepad();
    },
  },
  {
    title: '浏览器',
    icon: markRaw(IconGoogle),
    event() {
      addBrowser('about:blank');
    },
  },
  {
    title: '刷新页面',
    icon: markRaw(IconRefresh),
    event() {
      window.location.reload();
    },
  },
  {
    title: '页面设定',
    icon: markRaw(IconSettings),
    event() {
      openPageSetting();
    },
  },
]);
export const systemList = ref([
  {
    title: '备忘录',
    icon: markRaw(IconBook),
    event() {
      triggleMemo(true);
    },
  },
  {
    title: '记事本',
    icon: markRaw(IconBookmark),
    event() {
      showNotepad();
    },
  },
  {
    title: '浏览器',
    icon: markRaw(IconGoogle),
    event() {
      addBrowser('about:blank');
    },
  },
  {
    title: '图片处理',
    icon: markRaw(IconImage),
    event() {
      showImage('');
    },
  },
  {
    title: '页面设定',
    icon: markRaw(IconSettings),
    event() {
      openPageSetting();
    },
  },
  {
    title: '命令行',
    icon: markRaw(IconCommand),
    event() {
      setCommand('');
    },
  },
  {
    title: '关于',
    icon: markRaw(IconInfoCircleFill),
    event() {
      showPageAbout();
    },
  },
  {
    title: '帮助',
    icon: markRaw(IconQuestionCircleFill),
    event() {
      showHelp();
    },
  },
]);
