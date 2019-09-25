/*
 * @Description: 封面
 * @Author: zpl
 * @Date: 2019-09-18 18:12:40
 * @LastEditTime: 2019-09-25 17:08:28
 * @LastEditors: zpl
 */
import React from 'react'

import './index.less'
import heying from '../../images/heying.jpg'

export default class Cover extends React.Component {
    render() {
        return (
            <div className='route'>
                <h3>
                    <span>校园的点点滴滴，仿佛发生在昨日。那些年的回忆，是我一生的瑰宝，感谢有你陪伴……</span>
                    <div style={{ textAlign: 'right', marginTop: '2em' }}>致：9710的伙伴们</div>
                </h3>
                <img src={heying} />
            </div>
        );
    }
}