export type backgroundImageType = {
  type: 'linear' | 'image';
  src: string;
};

export interface SystemConfig {
  /* 网页标题 */
  title: string;
  /* 背景图片 */
  backgroundImage: backgroundImageType;
  /* 左上图标 */
  icon: string;
}
