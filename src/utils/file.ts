export const useUploadFile = () => {
  const input = document.createElement('input');
  input.hidden = true;
  input.type = 'file';
  input.click();
  return new Promise<File>((res) => {
    input.onchange = () => {
      const { files } = input;
      if (files?.length === 1) {
        res(files[0]);
      }
    };
  });
};

export const toBase64 = (file: File) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  return new Promise<string>((res) => {
    reader.onload = () => {
      res(reader.result as string);
    };
  });
};

/* 文件转文本 */
export const toText = (file: File) => {
  const reader = new FileReader();
  reader.readAsText(file);
  return new Promise<string>((res) => {
    reader.onload = () => {
      res(reader.result as string);
    };
  });
};

// 判断的是否是JSON字符串
export const isJson = (str: string): boolean => {
  try {
    const obj = JSON.parse(str);
    // 等于这个条件说明就是JSON字符串 会返回true
    if (typeof obj === 'object' && obj) {
      return true;
    }
    // 不是就返回false
    return false;
  } catch (e) {
    return false;
  }
};

export const srcToBase64 = (src: string): Promise<string> => {
  const canvas = document.createElement('canvas');
  canvas.hidden = true;
  document.body.append(canvas);
  const imgObject = new Image();
  imgObject.src = src;
  imgObject.crossOrigin = 'anonymous';
  return new Promise((res) => {
    imgObject.onload = () => {
      canvas.width = imgObject.width;
      canvas.height = imgObject.height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(imgObject, 0, 0);
      const base64 = canvas.toDataURL();
      canvas.remove();
      res(base64);
    };
  });
};

// type:文件类型
export function base64ToBlob(urlData: string, type: string) {
  const arr = urlData.split(',');
  const array = arr[0].match(/:(.*?);/);
  const mime = (array && array.length > 1 ? array[1] : type) || type;
  // 去掉url的头，并转化为byte
  const bytes = window.atob(arr[1]);
  // 处理异常,将ascii码小于0的转换为大于0
  const ab = new ArrayBuffer(bytes.length);
  // 生成视图（直接针对内存）：8位无符号整数，长度1个字节
  const ia = new Uint8Array(ab);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i);
  }
  return new Blob([ab], {
    type: mime,
  });
}

export function downloadExportFile(
  blob: Blob,
  fileName: string,
  fileType: string
) {
  const downloadElement = document.createElement('a');
  let href: any = blob;
  if (typeof blob === 'string') {
    downloadElement.target = '_blank';
  } else {
    href = window.URL.createObjectURL(blob); // 创建下载的链接
  }
  downloadElement.href = href;
  downloadElement.download = `${fileName}.${fileType}`; // 下载后文件名
  document.body.appendChild(downloadElement);
  downloadElement.click(); // 触发点击下载
  document.body.removeChild(downloadElement); // 下载完成移除元素
  if (typeof blob !== 'string') {
    window.URL.revokeObjectURL(href); // 释放掉blob对象
  }
}
