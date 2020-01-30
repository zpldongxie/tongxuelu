/*
 * @Description: 公共布局模板
 * @Author: zpl
 * @Date: 2019-09-18 21:46:58
 * @LastEditTime : 2020-01-30 14:31:25
 * @LastEditors  : zpl
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';

import treeImg from '../../images/shu.png';
import musicIcon from '../../images/musicIcon1.png';
import bgMusic from '../../images/bg-music.mp3';
import './index.less';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicPlay: true,
    };
  }

  chengeMusicPlay() {
    const { musicPlay } = this.state;
    if (musicPlay) this.rap.audioEl.pause();
    else this.rap.audioEl.play();
    this.setState({
      musicPlay: !musicPlay,
    });
  }

  render() {
    const { children } = this.props;
    const { musicPlay } = this.state;
    return (
      <div className="rootCon" style={{ background: `url(${treeImg}) no-repeat center`, backgroundSize: 'cover' }}>
        {children}
        <div
          className="musicCon"
          onClick={() => { this.chengeMusicPlay(); }}
        >
          <img src={musicIcon} alt="" className={musicPlay ? 'enable' : 'disable'} />
          <ReactAudioPlayer
            ref={(element) => { this.rap = element; }}
            src={bgMusic}
            autoPlay
            loop
            controls
            volume={0.6}
          />
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.any,
};

Layout.defaultProps = {
  children: {},
};
