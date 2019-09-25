/*
 * @Description: 工具类
 * @Author: zpl
 * @Date: 2019-09-23 15:51:34
 * @LastEditTime: 2019-09-23 16:33:14
 * @LastEditors: zpl
 */

/**
 * 等分数组,长度不是整数倍时,会循环取值补充到整数倍
 *
 * @param {Array} arr 数组
 * @param {Number} num 等分的数组个数
 * @returns 重组后的二维数组
 */
export const splitArray = (arr, num) => {
    let returnArray = [];

    let newArray = arr || [];
    const len = newArray.length;
    const yushu = len % num;
    // 先把数组长度补充到整数倍
    if (yushu !== 0) {
        const tempArr = arr.slice(0, num - yushu);
        newArray = newArray.concat(tempArr);
    }

    // 每个子数组的长度
    const subArrLen = newArray.length / num;
    for (let i = 0; i < newArray.length; i += subArrLen) {
        returnArray.push(newArray.slice(i, i + subArrLen));
    }

    return returnArray;
}

/**
 * 闪烁效果
 *
 * @param {Dom} dom dom对象
 * @param {Number} time 闪烁动画时长，单位为秒
 */
export const bling = (dom, time) => {
    dom.style.transition = `all ${time * 1000}ms ease-in-out`;
    dom.style.opacity = 1;
    setTimeout(() => {
        dom.style.opacity = .5;
    }, time * 1000);
}