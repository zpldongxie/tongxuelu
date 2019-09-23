/*
 * @Description: 应用入口
 * @Author: zpl
 * @Date: 2019-09-18 18:10:39
 * @LastEditTime: 2019-09-22 21:13:22
 * @LastEditors: zpl
 */
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import Layout from '@/Template/Layout'
import PageCon from '@/Components/PageCon'
import pageConStore from '@/store/pageConStore'

const About = () => <h2 className='route'>关于</h2>;
const Users = () => <h2 className='route'>用户</h2>;

ReactDom.render(<Layout>
    <Provider store={pageConStore}>
        <PageCon />
    </Provider>
</Layout>, document.getElementById('root')
);