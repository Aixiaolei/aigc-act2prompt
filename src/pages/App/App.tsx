import { Routes, Route, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd'
import './App.scss'

import { Act2Prompt, SuffixPrompt, PromptFoundationTemplate, SeedPromptWordsEditor } from '../index'
import HeaderComponents from '../../components/HeaderComponents/HeaderComponents';

import { PromptWordEditor } from '../../components'



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
  {
    key: '/aigc-act2prompt/template',
    label: '提示词模板',
  },
  {
    key: '/aigc-act2prompt/seedPromptWordsEditor',
    label: '种子词编辑',
  },
]




function App() {

  const navigate = useNavigate()
  const location = useLocation()

  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState([location.pathname])


  useEffect(() => {
    setDefaultSelectedKeys([location.pathname])
  },[location])

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  }

  const getSider = () => {
    const pathname = location.pathname
    
    if (pathname.indexOf('study') !== -1) {
      return null
    }

    return (
      <Sider style={{ background: colorBgContainer, borderRight: '1px solid rgba(5, 5, 5, 0.06)' }} width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={defaultSelectedKeys}
          selectedKeys={defaultSelectedKeys}
          items={menu}
          onClick={menuClick}
          style={{ borderInlineEnd: 'none' }}
        />
      </Sider>
    )
  }

  return (
    <Layout className='layout'>
      <PromptWordEditor/>
      <HeaderComponents />
      <Content>
        <Layout style={{ padding: '24px 0', background: colorBgContainer, height: "calc(100vh - 64px)" }}>

          {getSider()}

          <Content style={{ padding: '0 24px', minHeight: "280px", minWidth: '1440px' }}>

            <Routes>
              <Route path="/aigc-act2prompt" element={<Act2Prompt />} />
              <Route path="/aigc-act2prompt/suffix" element={<SuffixPrompt />} />
              <Route path="/aigc-act2prompt/template" element={<PromptFoundationTemplate />} />
              <Route path="/aigc-act2prompt/seedPromptWordsEditor" element={<SeedPromptWordsEditor />} />
              
              <Route path="*" element={<Act2Prompt />} />
            </Routes>

          </Content>
        </Layout>

      </Content>
    </Layout>
  );



}


export default App;
