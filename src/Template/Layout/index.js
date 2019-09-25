/*
 * @Description: 公共布局模板
 * @Author: zpl
 * @Date: 2019-09-18 21:46:58
 * @LastEditTime: 2019-09-25 16:47:06
 * @LastEditors: zpl
 */
import React, { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player'

import treeImg from '../../images/shu.png'
import bgMusic from '../../images/bg-music.mp3'
import './index.less'

export default class Layout extends Component {
    render() {
        const { children } = this.props
        return (
            <div className='rootCon' style={{ background: `url(${treeImg}) no-repeat center`, backgroundSize: 'cover' }}>
                <ReactAudioPlayer
                    src={bgMusic}
                    autoPlay
                    loop
                />
                {children}
            </div>
        )
    }
}
