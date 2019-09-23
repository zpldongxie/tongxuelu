/*
 * @Description: 影集
 * @Author: zpl
 * @Date: 2019-09-18 18:18:07
 * @LastEditTime: 2019-09-22 21:58:29
 * @LastEditors: zpl
 */
import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'

import AlbumComp from '@/Components/AlbumComp'

import './index.less'
import store from '@/store/store'
import { increment, increment_async } from '../../actions/index'

const studentsRequireContext = require.context("@/images/students", true, /^\.\/.*\.(png|jpg)$/);
const studentsImages = studentsRequireContext.keys().map(studentsRequireContext);

class Comp extends Component {
    constructor(props) {
        super(props);
    }

    onClick() {
        this.props.dispatch(increment());
    }

    onClick2() {
        this.props.dispatch(increment_async());
    }

    render() {
        return (
            <div className='route'>
                <h2>我们的风采</h2>
                {studentsImages}
                <div>
                    current number:  {this.props.number}
                    <button onClick={() => this.onClick()}>点击+1</button>
                </div>
                <div>
                    current number:  {this.props.number}
                    <button onClick={() => this.onClick2()}>点击2秒后+1</button>
                </div>
                <div className='albumList'></div>
            </div>
        )
    }
}

const Album = connect(
    state => ({
        number: state.number
    })
)(Comp);

export default () => <Provider store={store}>
    <Album />
</Provider>
