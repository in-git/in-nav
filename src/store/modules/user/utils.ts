import { storeToRefs } from 'pinia';
import useUserStore from '.';

export const getUserInfo = () => {
  return storeToRefs(useUserStore());
};

export const setUserInfo = () => {};
