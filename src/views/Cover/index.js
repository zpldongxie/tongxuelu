/*
 * @Description: 封面
 * @Author: zpl
 * @Date: 2019-09-18 18:12:40
 * @LastEditTime: 2019-09-19 21:20:30
 * @LastEditors: zpl
 */
import React from 'react'
import { Link } from 'react-router-dom'

export default class Cover extends React.Component {
    render() {
        return (
            <div className='route'>
                <footer><Link className='right' to="/Album/">进入{'>>'}</Link></footer>
            </div>
        );
    }
}