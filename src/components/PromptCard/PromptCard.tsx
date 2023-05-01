import React, { useState } from 'react';
import { Card, Space, Tag, Button, Typography, message, Tooltip } from 'antd'
import { determineLanguageType, setClipboard } from '../../utils'
import { Prompt } from '../../assets/data/prompt'

import { TagType, TypeOfTag } from "../../assets/data/act";
import './promptCard.scss'

import {
    PushpinFilled
} from '@ant-design/icons'

import { observer } from 'mobx-react'
import PromptWordEditorStore from '../../store/PromptWordEditorStore'


const { Title, Text } = Typography;

type prppsType = {
    prompt: Prompt,
    Tags: { [type in TagType]: TypeOfTag },
    language: string
}


const success = () => {
    message.success("已经写入剪贴板");
};

const error = () => {
    message.error("写入失败");
};

const PromptsCard = observer((props: prppsType) => {
    const { prompt, Tags, language } = props
    const tabs = prompt.tags

    const languageObj = determineLanguageType(language)

    const [_language, setLanguage] = useState(language)


    const edit = () => {
        let str = _language === 'CN' ? prompt.desc_cn : prompt.desc_en
        PromptWordEditorStore.openEditor(str)
    }

    const copy = () => {
        setClipboard(prompt.desc_cn, success, error)
    }


    const switchLanguage = () => {
        if (_language === 'EN') {
            setLanguage('CN')
        } else {
            setLanguage('EN')
        }
    }
    return (

        <Card bordered={false} className='prompt-card'>
            <div className='title'>

                <div className='title-text'>
                    <Title level={5} className='title-text'>{prompt.title}</Title>
                </div>
                <div className='title-operate'>
                    {/* <HeartFilled style={{ color: '#e9669e', fontSize: "16px", marginRight: '8px' }} /> */}
                    <Space size={4} wrap >
                        <Button size='small' onClick={switchLanguage}>{_language}</Button>
                        <Button size='small' onClick={copy}>{languageObj.copyBtnText}</Button>
                        <Button size='small' onClick={edit}>{languageObj.editBtnText}</Button>

                    </Space>


                </div>

            </div>
            <div className='subtitle'>
                <Tooltip placement="top" title={_language === 'CN' ? prompt.remark : prompt.remark_en}>

                    <Text className='subtitle-text'>
                        <PushpinFilled style={{ color: "#b37feb", display: 'inline-block' }} />
                        &nbsp;
                        {_language === 'CN' ? prompt.remark : prompt.remark_en}
                    </Text>

                </Tooltip>


            </div>
            <div className='prompt'>
                {_language === 'CN' ? prompt.desc_cn : prompt.desc_en}

            </div>
            <div className='foot'>
                {
                    tabs.map(item => {
                        return (
                            <Tag color="default" key={item}>
                                {Tags[item].label}
                                <i className='circular-icon' style={{ backgroundColor: Tags[item].color }}></i>
                            </Tag>
                        )
                    })
                }
            </div>
        </Card>
    )

})

export default PromptsCard