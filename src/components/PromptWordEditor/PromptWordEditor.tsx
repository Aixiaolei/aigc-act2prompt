import React from "react";
import { observer } from 'mobx-react'
import { Button, Row, Col, Drawer, Space } from 'antd';

import Store from '../../store'

const {drawerOpen, drawerData, openDrawer, drawerClose} = Store



function PromptWordEditor() {
    return (
        <Drawer
            title={`提示词编辑`}
            placement="right"
            size='large'
            onClose={drawerClose}
            open={drawerOpen}
            extra={
                <Space>
                    <Button onClick={drawerClose}>关闭</Button>
                    <Button >复制到剪贴板</Button>
                    <Button type="primary" onClick={drawerClose}>
                        OK
                    </Button>
                </Space>
            }
        >
            <div style={{ marginBottom: '16px' }}>
                <Button style={{ marginLeft: '8px' }}>复制修改后的内容</Button>
            </div>
            {/* <TextArea rows={20} value={copyValue} onChange={copyValueChange} style={{ fontSize: '22px' }} /> */}


        </Drawer>
    )
}

export default observer(PromptWordEditor)