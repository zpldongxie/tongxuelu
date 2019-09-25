/*
 * @Description: 通讯录
 * @Author: zpl
 * @Date: 2019-09-18 18:24:50
 * @LastEditTime: 2019-09-25 15:28:34
 * @LastEditors: zpl
 */
import React, { Component } from 'react'

import addressBook from '@/doc/addressBook'
import './index.less'

class Addr extends Component {
    render() {
        const { item } = this.props;
        return <li>
            <span className='id'>{item.id}</span>
            <span className='name'>{item.name}</span>
            <span className='middle'></span>
            <span className='phone'><a href={`tel:${item.phone}`}>{item.phone}</a></span>
        </li>
    }
}

export default class AddrBook extends Component {
    render() {
        return (
            <div className='route'>
                <h2 style={{
                    padding: '0 1rem',
                    fontFamily: 'cursive',
                    color: '#333',
                    margin: '0.6rem 0',
                    textAlign: 'right'
                }}>老同学，常联系～</h2>
                <div className='con'>
                    <h3 className='title'>班主任</h3>
                    <ul className='teacher'>
                        <Addr item={addressBook.classTeacher} />
                    </ul>
                    <h3 className='title'>同学录</h3>
                    <ul className='studentsList'>
                        {
                            addressBook.students.map((item, index) => {
                                return <Addr key={index} item={item} />
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
