/*
 * @Description: 照片墙动作定义
 * @Author: zpl
 * @Date: 2019-09-24 11:34:45
 * @LastEditTime: 2019-09-24 11:37:29
 * @LastEditors: zpl
 */
export const showBigImg = (bigImg) => {
    return {
        type: 'SHOWBIGIMG',
        bigImg: bigImg
    }
}

export const hideBigImg = () => {
    return {
        type: 'HIDEBIGIMG'
    }
}