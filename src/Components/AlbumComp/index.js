/*
 * @Description: 幻灯片影集
 * @Author: zpl
 * @Date: 2019-09-20 11:04:24
 * @LastEditTime : 2020-01-29 22:32:13
 * @LastEditors  : zpl
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showBigImg, hideBigImg } from '../../actions/albumAction'

import './index.less'

class AlbumComp extends Component {
    state = {
        ...this.props,
        showIndex: 0,
        pause: false,
        interval: null,
        speed: Math.floor(Math.random() * (3000)) + 4000
    }

    showNextImg() {
        const { picList, showIndex } = this.state;
        if (showIndex === picList.length - 1) {
            this.setState({ showIndex: 0 })
        } else {
            this.setState({ showIndex: showIndex + 1 })
        }
    }

    showBigImg(bigImg) {
        this.setState({ pause: true })
        this.props.dispatch(showBigImg(bigImg));
    }

    hideBigImg() {
        this.props.dispatch(hideBigImg());
    }

    componentDidMount() {
        clearInterval(this.interval)
        this.interval = setInterval(() => {
            if (this.props.showBigImg) {
                clearInterval(this.interval)
            }
            this.showNextImg()
        }, this.state.speed);
    }

    componentDidUpdate(){
        if(!this.props.showBigImg){
            clearInterval(this.interval)
            this.interval = setInterval(() => {
                if (this.props.showBigImg) {
                    clearInterval(this.interval)
                }
                this.showNextImg()
            }, this.state.speed);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const { picList, isTeacher, showIndex } = this.state;
        return <div className='albumCompCon'>
            {
                isTeacher ?
                    <div className='bg' style={{ borderRadius: '100%' }}>
                        <div className='bg1'>
                            <div className='img' style={{ backgroundImage: `url(${picList[showIndex].pic})` }}></div>
                        </div>
                    </div> :
                    <div className='bg'>
                        <div className='img' style={{ backgroundImage: `url(${picList[showIndex].pic})` }}></div>
                    </div>
            }
            <div className={isTeacher ? 'bordTch' : 'bord'} onClick={() => { this.showBigImg(picList[showIndex].pic) }}></div>
        </div>
    }
}

export default connect(
    state => ({
        bigImg: state.bigImg,
        showBigImg: state.showBigImg,
    })
)(AlbumComp);
