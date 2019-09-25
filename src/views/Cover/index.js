/*
 * @Description: 封面
 * @Author: zpl
 * @Date: 2019-09-18 18:12:40
 * @LastEditTime: 2019-09-25 17:08:28
 * @LastEditors: zpl
 */
import React from 'react'

export default class Cover extends React.Component {
    render() {
        return (
            <div className='route'>
                <h2 style={{
                    padding: '0 1rem',
                    fontFamily: 'cursive',
                    color: '#666',
                    margin: '40% 0',
                    textIndent: '2em'
                }}>
                    <span>校园的点点滴滴，仿佛发生在昨日，那些年的回忆，是我一生的瑰宝感，谢有你陪伴……</span>
                    <div style={{textAlign: 'right', marginTop: '3em'}}>致：9710的伙伴们</div>
                </h2>
            </div>
        );
    }
}