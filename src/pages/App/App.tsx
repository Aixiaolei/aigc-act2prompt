import { Routes, Route, useLocation } from 'react-router-dom'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd'
import './App.scss'

import { Act2Prompt, SuffixPrompt } from '../index'
import HeaderComponents from '../../components/HeaderComponents/HeaderComponents';

const { Sider, Content } = Layout


const menu = [
  {
    key: '/aigc-act2prompt/',
    label: '通用大模型提示词',
  },
  {
    key: '/aigc-act2prompt/suffix',
    label: '后缀提示词',
  },
]

function Demo (){
  return <div>demo</div>
}

function App() {

  const getSider = () => {
    const pathname = location.pathname
    
    if (pathname.indexOf('study') !== -1) {
      return null
    }

    return (
      <Sider style={{ background: colorBgContainer, borderRight: '1px solid rgba(5, 5, 5, 0.06)' }} width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          items={menu}
          onClick={menuClick}
          style={{ borderInlineEnd: 'none' }}
        />
      </Sider>
    )
  }


  const navigate = useNavigate()
  const location = useLocation()

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  }

  return (
    <Layout className='layout'>
      <HeaderComponents />
      <Content>

        <Layout style={{ padding: '24px 0', background: colorBgContainer, height: "calc(100vh - 64px)" }}>

          {getSider()}

          <Content style={{ padding: '0 24px', minHeight: "280px", minWidth: '1440px' }}>

            <Routes>
              <Route path="/aigc-act2prompt" element={<Act2Prompt />} />
              <Route path="/aigc-act2prompt/suffix" element={<SuffixPrompt />} />
              <Route path="*" element={<Act2Prompt />} />
            </Routes>

          </Content>
        </Layout>

      </Content>
    </Layout>
  );



}

export default App;
