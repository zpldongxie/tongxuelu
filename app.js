/*
 * @Description: 应用入口
 * @Author: zpl
 * @Date: 2019-09-18 18:10:39
 * @LastEditTime: 2019-09-20 08:50:57
 * @LastEditors: zpl
 */
import React from 'react'
import ReactDom from 'react-dom'

import Layout from './src/Template/Layout'
import Cover from './src/views/Cover'
import Album from './src/views/Album'
import AddrBook from './src/views/AddrBook'
import Story from './src/views/Story'
import Jdt1 from './src/views/animation/jin-du-tiao-js'
import Jdt2 from './src/views/animation/jin-du-tiao-css'
// import store from './src/store/store'
// import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AnimatedSwitch from './src/Components/AnimatedSwitch'

const About = () => <h2 className='route'>关于</h2>;
const Users = () => <h2 className='route'>用户</h2>;

ReactDom.render(<Layout>
    <Router>
        <AnimatedSwitch>
            {/* <Route path="/" exact component={Cover} /> */}
            <Route path="/" exact component={Album} />
            <Route path="/AddrBook/" exact component={AddrBook} />
            <Route path="/Story/" exact component={Story} />
            <Route path="/about/" exact component={About} />
            <Route path="/users/" exact component={Users} />
            <Route path="/jdt1/" exact component={Jdt1} />
            <Route path="/jdt2/" exact component={Jdt2} />
        </AnimatedSwitch>
    </Router>
    {/* <Provider store={store}>
        <Cover />
    </Provider> */}
</Layout>, document.getElementById('root')
);