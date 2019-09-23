/*
 * @Description: 影集
 * @Author: zpl
 * @Date: 2019-09-18 18:18:07
 * @LastEditTime: 2019-09-23 17:11:03
 * @LastEditors: zpl
 */
import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'

import { splitArray } from '@/util'
import AlbumComp from '@/Components/AlbumComp'

import './index.less'
import store from '@/store/store'
import { increment, increment_async } from '../../actions/index'

const studentsRequireContext = require.context("@/images/students", true, /^\.\/.*\.(png|jpg)$/);
const studentsImages = studentsRequireContext.keys().map(studentsRequireContext);
const imgList = splitArray(studentsImages, 8);


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
            <div className='albumList'>
                {imgList.map((imgArr, index) => {
                    return <div className='albumCon'><AlbumComp key={index} picList={imgArr} /></div>
                })}
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
