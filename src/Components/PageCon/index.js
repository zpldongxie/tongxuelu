/*
 * @Description: 页面容器，负责控制多个页面之前的切换
 * @Author: zpl
 * @Date: 2019-09-22 19:19:01
 * @LastEditTime: 2019-09-29 10:20:57
 * @LastEditors: zpl
 */
import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'

import './index.less';
import { nextPage, prevPage, gotoPage } from '../../actions/pageConAction'

import Cover from '@/views/Cover'
import Album from '@/views/Album'
import AddrBook from '@/views/AddrBook'
import History from '@/views/History'
import Storys from '@/views/Storys'

import { bling } from '../../util'

class Comp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            pageIndex,
            pageName,
            pageList
        } = this.props;
        const pageLength = pageList.length;

        const goPrevPageDom = (() => {
            if (pageIndex > 0) {
                return <a
                    className='left'
                    onClick={() => {
                        bling(event.target, 0.3);
                        this.props.dispatch(prevPage())
                    }}></a>
            } else {
                return ''
            }
        })()
        const goNextPageDom = (() => {
            if (pageIndex < pageLength - 1) {
                return <a
                    className='right'
                    onClick={() => {
                        bling(event.target, 0.3);
                        this.props.dispatch(nextPage())
                    }}></a>
            } else {
                return ''
            }
        })()

        return (
            <div>
                {
                    <div className='middleCon'>
                        <CSSTransition
                            in={pageName === 'Cover'}
                            timeout={1000}
                            classNames='fade'
                            unmountOnExit
                            appear={true}
                        >
                            <Cover />
                        </CSSTransition>
                        <CSSTransition
                            in={pageName === 'Album'}
                            timeout={1000}
                            classNames='fade'
                            unmountOnExit
                            appear={true}
                        >
                            <Album />
                        </CSSTransition>
                        <CSSTransition
                            in={pageName === 'AddrBook'}
                            timeout={1000}
                            classNames='fade'
                            unmountOnExit
                            appear={true}
                        >
                            <AddrBook />
                        </CSSTransition>
                        <CSSTransition
                            in={pageName === 'History'}
                            timeout={1000}
                            classNames='fade'
                            unmountOnExit
                            appear={true}
                        >
                            <History />
                        </CSSTransition>
                        <CSSTransition
                            in={pageName === 'Storys'}
                            timeout={1000}
                            classNames='fade'
                            unmountOnExit
                            appear={true}
                        >
                            <Storys />
                        </CSSTransition>
                    </div>
                }

                <footer>
                    {goPrevPageDom}
                    {goNextPageDom}
                </footer>
            </div>
        )
    }
}

export default connect(
    state => ({
        pageIndex: state.pageIndex,
        pageName: state.pageName,
        pageList: state.pageList
    })
)(Comp);