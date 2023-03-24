/**
 * todo: 获取文件名，不带后缀
 *
 * */
export const getFileName = (path: string) => {
  return path.replace(/(.*\/)*([^.]+).*/gi, '$2');
};

export function isImage(fileName: string) {
  const suffix = `(bmp|jpg|png|tif|gif|pcx|tga|exif|fpx|svg|psd|cdr|pcd|dxf|ufo|eps|ai|raw|WMF|webp|jpeg)`;
  const regular = new RegExp(`.*\\.${suffix}`);
  return regular.test(fileName);
}

export function isMp4(fileName: string) {
  const suffix = `(avi|wmv|mpeg|mp4|m4v|mov|asf|flv|f4v|rmvb|rm|3gp|vob)`;
  const regular = new RegExp(`.*\\.${suffix}`);
  return regular.test(fileName);
}

export const isUrl = (url: string) => {
  return new RegExp(
    '^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
    'i'
  ).test(url);
};
