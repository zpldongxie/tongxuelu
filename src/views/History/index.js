/*
 * @Description: 共同的回忆
 * @Author: zpl
 * @Date: 2019-09-29 10:18:31
 * @LastEditTime : 2020-01-30 17:42:28
 * @LastEditors  : zpl
 */
import React, { Component } from 'react'
import { Carousel } from 'antd'

import IMGS from '../../common/constant'
import './index.less'

export default class History extends Component {
    state = {
        autoplay: true,
        showBig: false,
        bigSrc: ''
    }

    interval = null;

    render() {
        const { showBig, bigSrc } = this.state;
        return (
            <div className='route'>
                <h3>当年情</h3>
                <Carousel
                    ref="slider"
                    effect="fade"
                >
                    {
                        IMGS.history.map((img, index) => <div key={index}>
                            <div
                                className='img'
                                style={{ backgroundImage: `url(${img.pic})` }}
                                onClick={() => { this.setState({ autoplay: false, showBig: true, bigSrc: img.pic }) }}
                            >&nbsp;</div>
                        </div>
                        )
                    }
                </Carousel>
                <div
                    className={`showBig ${showBig ? ' show' : ''}`}
                    style={{ backgroundImage: `url(${bigSrc})` }}
                    onClick={() => { this.setState({ autoplay: true, showBig: false, bigSrc: '' }) }}
                >&nbsp;</div>
            </div>
        )
    }

    componentDidMount() {
        const { autoplay } = this.state;
        if (autoplay) {
            this.interval = setInterval(() => {
                this.refs.slider.next();
            }, 3000);
        }
    }

    componentDidUpdate() {
        const { autoplay } = this.state;
        if (autoplay) {
            if (this.interval == null)
                this.interval = setInterval(() => {
                    this.refs.slider.next();
                }, 3000);
        } else {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }
}
