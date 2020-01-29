/*
 * @Description: 事迹
 * @Author: zpl
 * @Date: 2019-09-18 18:26:50
 * @LastEditTime : 2020-01-29 22:45:44
 * @LastEditors  : zpl
 */
import React, { Component } from 'react'
import { Carousel } from 'antd'
import { Card, Icon } from 'antd';

import { IMGS } from '../../common/constant'
import './index.less'

const { Meta } = Card;

class Slider extends Component {
    render() {
        const { imgs } = this.props;
        return <Carousel
            autoplay
            effect="fade"
            dots={false}
        >
            {
                imgs.map((img, index) => <div key={index}>
                    <div
                        className='img'
                        style={{ backgroundImage: `url(${img})` }}
                    >&nbsp;</div>
                </div>
                )
            }
        </Carousel>
    }
}

class InfoList extends Component {
    render() {
        const { imgList, backHandler } = this.props;
        return (
            <div className='infoList'>
                <Icon type="import" onClick={backHandler} />
                {imgList.map(
                    (pic, index) => (
                        <Card
                            key={pic}
                            style={{ width: '80%', margin: '0 auto' }}
                            cover={<img alt="example" src={pic} />}
                        >
                            <Meta title="想说点什么吗。。。" description="开心就好" />
                        </Card>)
                )}
            </div>
        )
    }
}

export default class Story extends Component {
    state = {
        showInfoList: false,
        infoList: []
    }

    render() {
        const {
            showInfoList,
            infoList
        } = this.state;
        return (
            <div className='route'>
                <h3>留下你的故事</h3>
                <div className='listCon'>
                    {
                        IMGS.story.map((item, index) => {
                            return <Card
                                key={index}
                                hoverable
                                cover={<Slider imgs={item.pics} />}
                                onClick={() => { this.setState({ showInfoList: true, infoList: item.pics }) }}
                            >
                                <Meta title={item.title} description={item.description} />
                            </Card>
                        })
                    }
                </div>
                {
                    showInfoList ?
                        <InfoList imgList={infoList} backHandler={()=>{this.setState({showInfoList: false, infoList: []})}} /> :
                        ''
                }

            </div>
        )
    }
}
