import { storeToRefs } from 'pinia';
import { nanoid } from 'nanoid';
import useAppStore from '.';
import { INotepad } from './types';

/* 添加记事本，如果存在就覆盖，不存在就添加 */
export const addNotepad = (item: INotepad) => {
  const { notepadList } = storeToRefs(useAppStore());
  /* 寻找记事本，存在就覆盖 */
  const index = notepadList.value.findIndex((e) => {
    return e.id === item.id;
  });

  if (index > -1) {
    notepadList.value[index] = item;
  } else {
    /* 否则新增 */
    item.id = nanoid();
    notepadList.value.unshift(item);
  }
};

export const getNotepadList = (): Array<INotepad> => {
  return storeToRefs(useAppStore()).notepadList.value;
};
export const deleteNotepad = (item: INotepad) => {
  storeToRefs(useAppStore()).notepadList.value = storeToRefs(
    useAppStore()
  ).notepadList.value.filter((el) => {
    return el.id !== item.id;
  });
};
export const setEngineSrc = (src: string) => {
  storeToRefs(useAppStore()).searchConfig.value.engineSrc = src;
};
export const getEngineSrc = () => {
  return storeToRefs(useAppStore()).searchConfig.value.engineSrc;
};
