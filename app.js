/*
 * @Description: 应用入口
 * @Author: zpl
 * @Date: 2019-09-18 18:10:39
 * @LastEditTime: 2019-09-24 12:12:11
 * @LastEditors: zpl
 */
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import Layout from '@/Template/Layout'
import PageCon from '@/Components/PageCon'
import pageConStore from '@/store/pageConStore'

ReactDom.render(<Layout>
    <Provider store={pageConStore}>
        <PageCon />
    </Provider>
</Layout>, document.getElementById('root')
);