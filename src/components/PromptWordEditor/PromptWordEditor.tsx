import React, { useEffect, useState } from "react";
import type { ChangeEvent } from 'react'
import { observer } from 'mobx-react'
import { Button, Typography, Drawer, Space, Input, message } from 'antd';
import { PromptWordEditorStore } from '../../store'

import {setClipboard} from '../../utils/'

const AIGC_LAST_VALUE_KEY = 'aigcLastValueKey'

const { TextArea } = Input
const { Title } = Typography

const success = () => {
    message.success("已经写入剪贴板");
};

const error = () => {
    message.error("写入失败");
};


const PromptWordEditor = observer(() => {

    const { editorSwitch, editorDesc, closeEditor } = PromptWordEditorStore

    const _lastValue = localStorage.getItem(AIGC_LAST_VALUE_KEY)

    const [lastValue, setLastValue] = useState<string>(_lastValue ? _lastValue : '')

    const [value, setValue] = useState<string>('')


    useEffect(() => {
        setValue(editorDesc)
        
    },[editorDesc])

    const lastValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setLastValue(e.target.value)
    }

    const valueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value)
    }

    const save = () => {
        setTimeout(() => {
            localStorage.setItem(AIGC_LAST_VALUE_KEY, value)
            setLastValue(value)
        });
    }

    const okClick = () => {
        save()
        closeEditor()
    }

    const _setClipboard = () => {
        setClipboard(value, success, error)
    }

    return (
        <Drawer
            title={`提示词编辑`}
            placement="right"
            size='large'
            onClose={closeEditor}
            open={editorSwitch}
            extra={
                <Space>
                    <Button onClick={closeEditor}>关闭</Button>
                    <Button onClick={save}>保存</Button>
                    <Button onClick={_setClipboard}>设置剪贴板</Button>
                    <Button type="primary" onClick={okClick}>
                        OK
                    </Button>
                </Space>
            }
        >
            <Title level={4}>保存的文案</Title>
            <TextArea rows={10} value={lastValue} onChange={lastValueChange} style={{ fontSize: '22px' }} />
            <Title level={4}>输入的文案</Title>
            <TextArea rows={10} value={value} onChange={valueChange} style={{ fontSize: '22px' }} />


        </Drawer>
    )



})



export default PromptWordEditor