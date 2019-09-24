/*
 * @Description: 照片墙状态维护，实例化为store对象
 * @Author: zpl
 * @Date: 2019-09-24 11:30:11
 * @LastEditTime: 2019-09-24 14:22:03
 * @LastEditors: zpl
 */

import { createStore } from 'redux'

const initialState = {
    showBigImg: false,
    bigImg: ''
}

const reducer = (state = initialState, action) => {    
    switch (action.type) {
        case 'SHOWBIGIMG':
            state.showBigImg = true
            state.bigImg = action.bigImg
            break;
        case 'HIDEBIGIMG':
            state.showBigImg = false
            state.bigImg = ''
            break;
        default: return state;
    }
    return { ...state }
};

const store = createStore(reducer)
export default store;