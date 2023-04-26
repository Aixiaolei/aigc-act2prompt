import React from 'react';
import { Typography, Layout, Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom'
import Logo from '../../assets/imges/logo.jpg'
import './HeaderComponents.scss'
import type { MenuProps } from 'antd';

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank"  href="https://juejin.cn/column/7226301946838794299">
                提示词技术专栏
            </a>
        ),
    },
];


const { Header } = Layout

const { Title } = Typography;





function HeaderComponents() {
    return (
        <Header className='header'>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <div style={{ display: 'flex' }}>
                    <img src={Logo} className='logo' />
                    <Title level={3} className='title-text' >AIGC-提示词大全</Title>
                    <Dropdown menu={{ items }}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space className='title-menu'>
                                教程及资料
                            </Space>
                        </a>
                    </Dropdown>

                </div>

                <div style={{ display: 'flex' }}>
                    <a className='github-logo' href='https://github.com/Aixiaolei/aigc-act2prompt' target='_blank'></a>
                </div>


            </div>


        </Header>
    )

}

export default HeaderComponents