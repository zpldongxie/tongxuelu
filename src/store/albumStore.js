/*
 * @Description: 照片墙状态维护，实例化为store对象
 * @Author: zpl
 * @Date: 2019-09-24 11:30:11
 * @LastEditTime : 2020-01-30 18:47:20
 * @LastEditors  : zpl
 */

import { createStore } from 'redux';

const initialState = {
  isShowBigImg: false,
  bigImg: '',
};

const reducer = (state = initialState, action) => {
  const newState = state;
  switch (action.type) {
    case 'SHOWBIGIMG':
      newState.isShowBigImg = true;
      newState.bigImg = action.bigImg;
      break;
    case 'HIDEBIGIMG':
      newState.isShowBigImg = false;
      newState.bigImg = '';
      break;
    default: return newState;
  }
  return { ...newState };
};

const store = createStore(reducer);
export default store;
