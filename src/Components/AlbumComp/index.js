/*
 * @Description: 幻灯片影集
 * @Author: zpl
 * @Date: 2019-09-20 11:04:24
 * @LastEditTime: 2019-09-24 14:10:41
 * @LastEditors: zpl
 */
import React, { Component } from 'react'

import './index.less'

export default class Comp extends Component {
    render() {
        const { picList, showBigImg } = this.props;
        return <div className='imgCon' onClick={() => { showBigImg(picList[0]) }}>
            <div style={{ backgroundImage: `url(${picList[0]})` }}></div>
        </div>
    }
}
