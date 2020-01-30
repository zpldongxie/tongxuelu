/*
 * @Description: 页面窗口状态维护，实例化为store对象
 * @Author: zpl
 * @Date: 2019-09-22 20:46:48
 * @LastEditTime : 2020-01-30 18:09:04
 * @LastEditors  : zpl
 */
import { createStore } from 'redux';

const initialState = {
  pageIndex: 0,
  pageName: 'Cover',
  pageList: ['Cover', 'Album', 'AddrBook', 'History', 'Storys'],
  pageNameList: ['首页', '照片墙', '通讯录', '校园时光', '我们的故事'],
};

const reducer = (state = initialState, action) => {
  const len = state.pageList.length;
  const newState = state;
  switch (action.type) {
    case 'NEXTPAGE':
      newState.pageIndex += newState.pageIndex < len - 1 ? 1 : 0;
      break;
    case 'PREVPAGE':
      newState.pageIndex -= newState.pageIndex > 0 ? 1 : 0;
      break;
    case 'GOTOPAGE':
      if (action.pageIndex >= 0 && action.pageIndex <= len - 1) { newState.pageIndex = action.pageIndex; }
      break;
    default: return newState;
  }
  newState.pageName = newState.pageList[newState.pageIndex];
  return { ...newState };
};

const store = createStore(reducer);
export default store;
