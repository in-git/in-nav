import { ref, reactive } from 'vue';
import { INotepad } from '../../../store/modules/app/types';

// eslint-disable-next-line import/no-mutable-exports
export const notepadConfig = reactive({
  show: false,
  /* 直接保存HTML,保留所有原始格式 */
  content: '',
  title: '',
  id: '',
});

export const showNotepad = () => {
  notepadConfig.content = '';
  notepadConfig.show = true;
  notepadConfig.title = '';
  notepadConfig.id = '';
};

export const selectNotepad = (item: INotepad) => {
  if (!item.id) return;
  notepadConfig.content = item.content;
  notepadConfig.id = item.id;
  notepadConfig.title = item.title;
  notepadConfig.show = true;
};
