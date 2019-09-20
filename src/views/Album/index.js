/*
 * @Description: 影集
 * @Author: zpl
 * @Date: 2019-09-18 18:18:07
 * @LastEditTime: 2019-09-20 11:29:17
 * @LastEditors: zpl
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                <footer>
                    {/* <Link className='left' to="/">{"<<"}</Link> */}
                    <Link className='right' to="/AddrBook/">{">>"}</Link>
                </footer>
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
