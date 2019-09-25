/*
 * @Description: 影集
 * @Author: zpl
 * @Date: 2019-09-18 18:18:07
 * @LastEditTime: 2019-09-25 14:45:43
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
const teacherRequireContext = require.context("@/images/teacher", true, /^\.\/.*\.(png|jpg)$/);
const teacherImages = teacherRequireContext.keys().map(teacherRequireContext);
let imgList = splitArray(studentsImages, 8);
let teacherImgs = splitArray(teacherImages, 1);
imgList.splice(4, 0, teacherImgs[0]);

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
                <CSSTransition
                    in={showBigImg}
                    timeout={1000}
                    classNames='fade'
                    unmountOnExit
                    appear={true}
                >
                    <div className={`showBigImg`}>
                        <div
                            style={{ backgroundImage: `url(${bigImg})` }}
                            onClick={() => { this.hideBigImg() }}
                        ></div>
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={true}
                    timeout={1000}
                    classNames='fade'
                    appear={true}
                >
                    <div className={`albumList`}>
                        {imgList.map((imgArr, index) => {
                            return <div className='albumCon'><AlbumComp key={index} picList={imgArr} isTeacher={index === 4} /></div>
                        })}
                    </div>
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
