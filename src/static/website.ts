import { getWebIcon } from '@/utils/api';
import { ref } from 'vue';

export const friendshipLink = [];
export const linkList = ref([
  {
    type: 'image',
    list: [
      {
        src: 'https://www.pexels.com/',
        title: 'pexels',
        icon: getWebIcon('https://www.pexels.com/'),
      },
      {
        src: 'https://wallpaperhub.app/',
        title: '在线壁纸',
        icon: getWebIcon('https://wallpaperhub.app/'),
      },
      {
        src: 'https://nihaojob.github.io/vue-fabric-editor/',
        title: '海报',
        icon: getWebIcon('https://nihaojob.github.io/vue-fabric-editor/'),
      },
      {
        src: 'https://excalidraw.com/',
        title: 'SVG编辑',
        icon: getWebIcon('https://excalidraw.com/'),
      },
      // {
      //   src: 'https://anime-pictures.net/',
      //   title: 'Anime-Pictures',
      //   icon: getWebIcon('https://anime-pictures.net/'),
      // },
      {
        src: 'https://color.oulu.me/',
        title: '渐变背景',
        icon: getWebIcon('https://color.oulu.me/'),
      },
      {
        src: 'https://ps.gaoding.com/#/',
        title: '在线PS',
        icon: getWebIcon('https://ps.gaoding.com/#/'),
      },
      {
        src: 'https://cli.im/',
        title: '二维码',
        icon: getWebIcon('https://cli.im/'),
      },
    ],
  },
  {
    type: 'ai',
    list: [
      {
        src: 'https://chat.extnav.com/',
        title: '在线chatGPT',
        icon: getWebIcon('https://chat1.wuguokai.top/s/chatgpt'),
      },
      {
        src: 'https://cc.ai55.cc/',
        title: 'chatGPT合集',
        icon: getWebIcon('https://cc.ai55.cc/'),
      },
    ],
  },
]);
