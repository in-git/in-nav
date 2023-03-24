/* 生成随机数字 */
export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const copyText = (text: string) => {
  // 添加一个input元素放置需要的文本内容
  const copyContent = document.createElement('input');
  copyContent.value = text;
  document.body.appendChild(copyContent);
  // 选中并复制文本到剪切板
  copyContent.select();
  document.execCommand('copy');
  // 移除input元素
  document.body.removeChild(copyContent);
};

/**
 * @description 复制
 * @param {*} id DOM ID
 */
export const copyDomText = (node: HTMLElement) => {
  const createRange = document.createRange();
  createRange.selectNodeContents(node);
  const selection = document.getSelection() as Selection;
  selection.removeAllRanges();
  selection.addRange(createRange);
  document.execCommand('Copy');
  selection.removeAllRanges();
};

export const createStyle = (code: string) => {
  const style = document.createElement('style');
  // for Chrome Firefox Opera Safari
  style.appendChild(document.createTextNode(code));
  // for IE
  // style.styleSheet.cssText = code;
  const head = document.getElementsByTagName('head')[0];
  head.appendChild(style);
};
export const openLink = (href: string) => {
  const link = document.createElement('a') as HTMLAnchorElement;
  link.href = href;
  link.target = '_blank';
  document.body.append(link);
  link.click();
  setTimeout(() => link.parentNode?.removeChild(link));
};

export const downloadText = (text: string, filename = 'text') => {
  const element = document.createElement('a');
  element.setAttribute(
    'href',
    `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`
  );
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

export const importImage = (src: string) => {
  return new URL(src, import.meta.url).href;
};

export const importAssets = (src: string) => {
  return importImage(`../assets/${src}`);
};

export function range(loc: number, min: number, max: number) {
  if (loc > max) {
    return max;
  }
  if (loc < min) {
    return min;
  }
  return loc;
}

/**
 * 描述:过滤布尔值
 *  */
export const boolValue = (bool: boolean, _true = '', _false = '') => {
  return bool ? _true : _false;
};

export const formatDate = (time?: Date) => {
  const date = !time ? new Date() : new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 月份是从0开始的
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const newTime = `${year}-${month}-${day} ${hour}:${min}:${sec}`;
  return newTime;
};
