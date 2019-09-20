/*
 * @Description: 事迹
 * @Author: zpl
 * @Date: 2019-09-18 18:26:50
 * @LastEditTime: 2019-09-19 19:28:18
 * @LastEditors: zpl
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Story extends Component {
    render() {
        return (
            <div className='route'>
                <h2>留下你的故事</h2>
                <footer><Link className='left' to="/AddrBook/">{"<<"}</Link></footer>
            </div>
        )
    }
}
