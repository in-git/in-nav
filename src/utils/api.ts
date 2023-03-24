import axios from 'axios';

const ICON_API = `https://api.xinac.net/icon/?url=`;
const TITLE_API = `https://api.no0a.cn/api/sitetitle/query?url=`;
export const getWebIcon = (src: string) => {
  return ICON_API + src;
};

export const getWebTitle = (src: string) => {
  return TITLE_API + src;
};
