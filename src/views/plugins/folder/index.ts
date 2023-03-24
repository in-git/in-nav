import { reactive } from 'vue';

export const folderConfig = reactive({
  show: false,
  fileList: [] as Array<File>,
});

export const showFolder = (file: File) => {
  folderConfig.show = true;
  const isExist = folderConfig.fileList.findIndex((e) => {
    return e.name === file.name;
  });
  if (isExist < 0) {
    folderConfig.fileList.push(file);
  }
};
export const deleteFile = (name: string) => {
  folderConfig.fileList = folderConfig.fileList.filter((item) => {
    return item.name !== name;
  });
};
