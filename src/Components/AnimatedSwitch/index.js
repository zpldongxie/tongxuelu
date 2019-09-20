/*
 * @Description: 给Router路由切换增加动画效果
 * @Author: zpl
 * @Date: 2019-09-18 17:16:41
 * @LastEditTime: 2019-09-18 18:17:40
 * @LastEditors: zpl
 */
import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route, Switch } from 'react-router-dom'
import './index.less'
 
const AnimatedSwitch = props => {
  const { children } = props
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames={props.type || 'fade'} 
            timeout={props.duration || 300}
          >
            <Switch location={location}>{children}</Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  )
}
 
export default AnimatedSwitch;