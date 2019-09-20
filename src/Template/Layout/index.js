/*
 * @Description: 公共布局模板
 * @Author: zpl
 * @Date: 2019-09-18 21:46:58
 * @LastEditTime: 2019-09-19 16:59:43
 * @LastEditors: zpl
 */
import React, { Component } from 'react'
import './index.less'

export default class Layout extends Component {
    render() {
        const { children } = this.props
        return (
            <div className='rootCon'>
                {children}
            </div>
        )
    }
}
