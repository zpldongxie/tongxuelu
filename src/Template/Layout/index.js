/*
 * @Description: 公共布局模板
 * @Author: zpl
 * @Date: 2019-09-18 21:46:58
 * @LastEditTime : 2020-01-29 23:14:53
 * @LastEditors  : zpl
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
                {children}
                <ReactAudioPlayer
                    src={bgMusic}
                    autoPlay
                    loop
                    controls
                    volume={0.5}
                    style={{height: '0'}}
                />
            </div>
        )
    }
}
