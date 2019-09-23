/*
 * @Description: 幻灯片影集
 * @Author: zpl
 * @Date: 2019-09-20 11:04:24
 * @LastEditTime: 2019-09-23 18:22:37
 * @LastEditors: zpl
 */
import React, { Component } from 'react'

import './index.less'

export default class Comp extends Component {
    state = {
        showBig: false
    }
    render() {
        const { picList } = this.props;
        return <div className={this.state.showBig ? 'imgCon showBig' : 'imgCon'} onClick={() => { this.setState({ showBig: !this.state.showBig }) }}>
            <div style={{ backgroundImage: `url(${picList[0]})` }}></div>
        </div>
    }
}
