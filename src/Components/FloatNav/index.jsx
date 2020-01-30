/*
 * @Description: 漂浮导航组件
 * @Author: zpl
 * @Date: 2019-10-22 16:38:24
 * @LastEditTime : 2020-01-30 16:38:10
 * @LastEditors  : zpl
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { gotoPage } from '../../actions/pageConAction';

import { bling } from '../../util';

import './index.less';

class FloatNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
    };
  }

  clickHandler(event, index) {
    const { dispatch } = this.props;
    bling(event.target, 1, 0.3);
    dispatch(gotoPage(index));
  }

  render() {
    const {
      showNav,
    } = this.state;
    const {
      pageIndex,
      pageNameList,
    } = this.props;
    return (
      <div className="floatNav">
        <div
          className="btn"
          style={{
            display: showNav ? 'none' : 'block',
          }}
          onClick={() => {
            this.setState({
              showNav: true,
            });
          }}
        >
          传送门
        </div>
        <div
          className={showNav ? 'nav' : 'nav hidden'}
          onClick={(event) => {
            if (event.target.nodeName !== 'LI') {
              this.setState({
                showNav: false,
              });
            }
          }}
        >
          <ul>
            {
              pageNameList.map((item, index) => (
                <li
                  key={item}
                  className={index === pageIndex ? 'active' : ''}
                  onClick={(event) => {
                    this.clickHandler(event, index);
                  }}
                >
                  {item}
                </li>
              ))
            }
            <li
              key="yiqing"
              className="yiqing"
            >
              <a href="https://voice.baidu.com/act/newpneumonia/newpneumonia" target="_blank" rel="noopener noreferrer">疫情大数据</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

FloatNav.propTypes = {
  pageIndex: PropTypes.number,
  pageNameList: PropTypes.array,
  dispatch: PropTypes.any,
};

FloatNav.defaultProps = {
  pageIndex: 0,
  pageNameList: [],
  dispatch: () => {},
};

export default connect(
  (state) => ({
    pageIndex: state.pageIndex,
    pageNameList: state.pageNameList,
  }),
)(FloatNav);
