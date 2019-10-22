/*
 * @Description: 漂浮导航组件
 * @Author: zpl
 * @Date: 2019-10-22 16:38:24
 * @LastEditTime: 2019-10-22 18:01:06
 * @LastEditors: zpl
 */
import React, { Component } from 'react'

import { connect } from 'react-redux'
import { gotoPage } from '../../actions/pageConAction'

import { bling } from '../../util'

import './index.less'

class FloatNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNav: false
        }
    }

    clickHandler = index => {
        bling(event.target, 1, 0.3);
        this.props.dispatch(gotoPage(index))
    }

    render() {
        const {
            showNav
        } = this.state;
        const {
            pageIndex,
            pageNameList
        } = this.props;
        return (
            <div className='floatNav'>
                <div
                    className='btn'
                    style={{
                        display: showNav ? 'none' : 'block'
                    }}
                    onClick={() => {
                        this.setState({
                            showNav: true
                        });
                    }}
                >传送门</div>
                <div
                    className={showNav ? 'nav' : 'nav hidden'}
                    onClick={() => {
                        if (event.target.nodeName !== "LI")
                            this.setState({
                                showNav: false
                            });
                    }}
                >
                    <ul>
                        {
                            pageNameList.map((item, index) => {
                                return <li
                                    key={index}
                                    className={index === pageIndex ? 'active' : ''}
                                    onClick={() => {
                                        this.clickHandler(index);
                                    }}>{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        pageIndex: state.pageIndex,
        pageNameList: state.pageNameList
    })
)(FloatNav);