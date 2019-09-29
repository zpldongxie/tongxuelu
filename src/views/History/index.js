/*
 * @Description: 共同的回忆
 * @Author: zpl
 * @Date: 2019-09-29 10:18:31
 * @LastEditTime: 2019-09-29 14:11:12
 * @LastEditors: zpl
 */
import React, { Component } from 'react'
import { Carousel } from 'antd'

import { IMGS } from '../../common/constant'
import './index.less'

export default class History extends Component {
    state = {
        imgList: IMGS.history
    }

    render() {
        const { imgList } = this.state;
        return (
            <div className='route'>
                <h3>当年情</h3>
                <Carousel autoplay effect="fade">
                    {
                        imgList.map((img, index) => <div key={index}>
                            <div className='img' style={{ backgroundImage: `url(${img.pic})` }}>&nbsp;</div>
                        </div>
                        )
                    }
                </Carousel>
            </div>
        )
    }
}
