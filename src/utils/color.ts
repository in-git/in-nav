import { randomNumber } from './utils';

export const colorGroup = [
  '#fca311',
  '#ffd6ff',
  '#c8b6ff',
  '#52b788',
  '#ffd670',
  '#ff6b6b',
];

export const randomGroupColor = () => {
  const index = randomNumber(0, colorGroup.length - 1);
  return colorGroup[index];
};
/* 生成随机颜色 */
export const randomHexColor = () => {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
};
