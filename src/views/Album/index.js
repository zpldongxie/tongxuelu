/*
 * @Description: 影集
 * @Author: zpl
 * @Date: 2019-09-18 18:18:07
 * @LastEditTime: 2019-09-24 18:29:03
 * @LastEditors: zpl
 */
import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { splitArray } from '@/util'
import AlbumComp from '@/Components/AlbumComp'

import './index.less'
import albumStore from '@/store/albumStore'
import { showBigImg, hideBigImg } from '../../actions/albumAction'

const studentsRequireContext = require.context("@/images/students", true, /^\.\/.*\.(png|jpg)$/);
const studentsImages = studentsRequireContext.keys().map(studentsRequireContext);
const imgList = splitArray(studentsImages, 8);


class Comp extends Component {
    constructor(props) {
        super(props);
    }

    showBigImg(bigImg) {
        this.props.dispatch(showBigImg(bigImg));
    }

    hideBigImg() {
        this.props.dispatch(hideBigImg());
    }

    render() {
        const { showBigImg, bigImg } = this.props;
        return (
            <div>
                <div className={`albumList ${showBigImg ? 'hide' : 'show'}`}>
                    {imgList.map((imgArr, index) => {
                        return <div className='albumCon'><AlbumComp key={index} picList={imgArr} showBigImg={(bigImg) => { this.showBigImg(bigImg) }} /></div>
                    })}
                </div>
                <CSSTransition
                    classNames="fade"
                    in={showBigImg}
                    timeout={500}
                >
                    <div
                        style={{ backgroundImage: `url(${bigImg})` }}
                        className={`showBigImg${showBigImg ? ' show' : ' hide'}`}
                        onClick={() => { this.hideBigImg() }}
                    ></div>
                </CSSTransition>
            </div>
        )
    }
}

const Album = connect(
    state => ({
        showBigImg: state.showBigImg,
        bigImg: state.bigImg
    })
)(Comp);

export default () => <Provider store={albumStore}>
    <Album />
</Provider>
