import React from 'react';
import { Typography, Layout } from 'antd';
import Logo from '../../assets/imges/logo.jpg'
import './HeaderComponents.scss'


const { Header } = Layout

const { Title } = Typography;


// const items: MenuProps['items'] = [
//     // {
//     //     label: (
//     //         <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
//     //             1st menu item
//     //         </a>
//     //     ),
//     //     key: '0',
//     // },
//     // {
//     //     label: (
//     //         <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
//     //             2nd menu item
//     //         </a>
//     //     ),
//     //     key: '1',
//     // },
// ];



function HeaderComponents() {
    return (
        <Header className='header'>
            <div style={{ display: 'flex', justifyContent:'space-between', width:'100%' }}>
                <div style={{ display: 'flex' }}>
                    <img src={Logo} className='logo' />
                    <Title level={3} className='title-text' >AIGC-提示词大全</Title>
                    {/* <a className='dropdown dropdown-one'>
                    案例
                    </a> */}

                    {/* <Dropdown menu={{ items }} className='dropdown'>
                        { <Space style={{ fontSize: '20px' }} className=''>
                            说明
                            {<CaretDownFilled /> }
                        </Space>
                    </Dropdown> } */}
                </div>

                <div style={{ display: 'flex' }}>
                    <a className='github-logo' href='https://github.com/Aixiaolei/aigc-act2prompt' target='_blank'></a>    
                </div>


            </div>


        </Header>
    )

}

export default HeaderComponents