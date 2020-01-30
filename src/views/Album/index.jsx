/*
 * @Description: 影集
 * @Author: zpl
 * @Date: 2019-09-18 18:18:07
 * @LastEditTime : 2020-01-30 17:56:14
 * @LastEditors  : zpl
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import IMGS from '@/common/constant';
import { splitArray } from '@/util';
import AlbumComp from '@/Components/AlbumComp';

import './index.less';
import albumStore from '@/store/albumStore';
import { showBigImg, hideBigImg } from '../../actions/albumAction';

// const studentsRequireContext = require.context("@/images/students", true, /^\.\/.*\.(png|jpg)$/);
// const studentsImages = studentsRequireContext.keys().map(studentsRequireContext);
// const teacherRequireContext = require.context("@/images/teacher", true, /^\.\/.*\.(png|jpg)$/);
// const teacherImages = teacherRequireContext.keys().map(teacherRequireContext);
const studentsImages = [];
IMGS.students.forEach((student) => {
  if (student.pic && student.pic !== '') {
    studentsImages.push(student);
  }
});

const imgList = splitArray(studentsImages, 8);
// let teacherImgs = splitArray(teacherImages, 1);
const teacherImgs = splitArray(IMGS.teacher, 1);
imgList.splice(4, 0, teacherImgs[0]);

class Comp extends Component {
  showBigImg(bigImg) {
    const { dispatch } = this.props;
    dispatch(showBigImg(bigImg));
  }

  hideBigImg() {
    const { dispatch } = this.props;
    dispatch(hideBigImg());
  }

  render() {
    const { isShowBigImg, bigImg } = this.props;
    return (
      <div>
        <h3 className="albumTitle">我们的风采!</h3>
        <CSSTransition
          in={isShowBigImg}
          timeout={1000}
          classNames="fade"
          unmountOnExit
          appear
        >
          <div className="showBigImg">
            <div
              style={{ backgroundImage: `url(${bigImg})` }}
              onClick={() => { this.hideBigImg(); }}
            />
          </div>
        </CSSTransition>
        <CSSTransition
          in
          timeout={1000}
          classNames="fade"
          appear
        >
          <div className="albumList">
            {imgList.map((imgArr, index) => <div key={`${imgArr.toString()}${index.toString()}`} className="albumCon"><AlbumComp picList={imgArr} isTeacher={index === 4} /></div>)}
          </div>
        </CSSTransition>
      </div>
    );
  }
}

Comp.propTypes = {
  isShowBigImg: PropTypes.bool,
  bigImg: PropTypes.string,
  dispatch: PropTypes.any,
};

Comp.defaultProps = {
  isShowBigImg: false,
  bigImg: '',
  dispatch: () => {},
};

const Album = connect(
  (state) => ({
    showBigImg: state.showBigImg,
    bigImg: state.bigImg,
  }),
)(Comp);

export default () => (
  <Provider store={albumStore}>
    <Album />
  </Provider>
);
