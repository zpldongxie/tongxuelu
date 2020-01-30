/*
 * @Description: 封面
 * @Author: zpl
 * @Date: 2019-09-18 18:12:40
 * @LastEditTime: 2019-09-27 18:15:51
 * @LastEditors: zpl
 */
import React from 'react';
import IMGS from '../../common/constant';

import './index.less';

export default () => (
  <div className="route">
    <h3>
      <span>校园的点点滴滴，仿佛发生在昨日。那些年的回忆，是我一生的瑰宝，感谢有你陪伴……</span>
      <div style={{ textAlign: 'right', marginTop: '2em' }}>致：9710的伙伴们</div>
    </h3>
    <img src={IMGS.heying} alt="" />
  </div>
);
