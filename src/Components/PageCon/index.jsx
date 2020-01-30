/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/*
 * @Description: 页面容器，负责控制多个页面之前的切换
 * @Author: zpl
 * @Date: 2019-09-22 19:19:01
 * @LastEditTime : 2020-01-30 16:06:54
 * @LastEditors  : zpl
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import './index.less';
import { nextPage, prevPage } from '../../actions/pageConAction';

import FloatNav from '../FloatNav';
import Cover from '@/views/Cover';
import Album from '@/views/Album';
import AddrBook from '@/views/AddrBook';
import History from '@/views/History';
import Storys from '@/views/Storys';

import { bling } from '../../util';

class Comp extends Component {
  render() {
    const {
      pageIndex,
      pageName,
      pageList,
      dispatch,
    } = this.props;
    const pageLength = pageList.length;

    const goPrevPageDom = (() => {
      if (pageLength && pageIndex > 0) {
        return (
          <a
            className="left"
            onClick={(event) => {
              bling(event.target, 0.5, 0.3);
              dispatch(prevPage());
            }}
          >
            &nbsp;
          </a>
        );
      }
      return '';
    })();
    const goNextPageDom = (() => {
      if (pageLength && pageIndex < pageLength - 1) {
        return (
          <a
            className="right"
            onClick={(event) => {
              bling(event.target, 0.5, 0.3);
              dispatch(nextPage());
            }}
          >
            &nbsp;
          </a>
        );
      }
      return '';
    })();

    return (
      <div>
        <FloatNav />
        <div className="middleCon">
          <CSSTransition
            in={pageName === 'Cover'}
            timeout={1000}
            classNames="fade"
            unmountOnExit
            appear
          >
            <Cover />
          </CSSTransition>
          <CSSTransition
            in={pageName === 'Album'}
            timeout={1000}
            classNames="fade"
            unmountOnExit
            appear
          >
            <Album />
          </CSSTransition>
          <CSSTransition
            in={pageName === 'AddrBook'}
            timeout={1000}
            classNames="fade"
            unmountOnExit
            appear
          >
            <AddrBook />
          </CSSTransition>
          <CSSTransition
            in={pageName === 'History'}
            timeout={1000}
            classNames="fade"
            unmountOnExit
            appear
          >
            <History />
          </CSSTransition>
          <CSSTransition
            in={pageName === 'Storys'}
            timeout={1000}
            classNames="fade"
            unmountOnExit
            appear
          >
            <Storys />
          </CSSTransition>
        </div>

        <footer>
          {goPrevPageDom}
          {goNextPageDom}
        </footer>
      </div>
    );
  }
}

Comp.propTypes = {
  pageIndex: PropTypes.number,
  pageName: PropTypes.string,
  pageList: PropTypes.array,
  dispatch: PropTypes.any,
};

Comp.defaultProps = {
  pageIndex: 0,
  pageName: '',
  pageList: [],
  dispatch: () => {},
};

export default connect(
  (state) => ({
    pageIndex: state.pageIndex,
    pageName: state.pageName,
    pageList: state.pageList,
  }),
)(Comp);
