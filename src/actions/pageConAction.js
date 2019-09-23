/*
 * @Description: 页面窗口动作定义
 * @Author: zpl
 * @Date: 2019-09-22 20:52:18
 * @LastEditTime: 2019-09-22 21:41:06
 * @LastEditors: zpl
 */
export const nextPage = () => {
    return {
        type: 'NEXTPAGE'
    }
}

export const prevPage = () => {
    return {
        type: 'PREVPAGE'
    }
}

export const gotoPage = (index) => {
    return {
        type: 'GOTOPAGE',
        pageIndex: index
    }
}