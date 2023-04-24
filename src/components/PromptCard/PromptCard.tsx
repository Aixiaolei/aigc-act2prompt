import React, { useState } from 'react';
import { Card, Space, Tag, Button, Typography, message } from 'antd'
import { determineLanguageType } from '../../utils/index'
import { Prompt } from '../../assets/data/prompt'

import {  TagType, TypeOfTag } from "../../assets/data/act";
import './promptCard.scss'


import {
    PushpinFilled
} from '@ant-design/icons'

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


function PromptsCard(props: prppsType) {

    const { prompt, Tags, language } = props
    const tabs = prompt.tags

    const languageObj = determineLanguageType(language)

    const [_language, setLanguage] = useState(language)

    const copy = () => {
        console.log(prompt)
        navigator.permissions.query({ name: "clipboard-write" as PermissionName }).then(result => {
            // 如果有权限，或者用户同意授予权限
            if (result.state ==="granted" || result.state === "prompt") {
                // 将文本写入剪贴板
                navigator.clipboard.writeText(prompt.desc_cn)
                    .then(() => {
                        success()
                    })
                    .catch(err => {
                        error()
                    });
            }
        });
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
                        <Button className='' size='small' onClick={switchLanguage}>{_language}</Button>
                        <Button className='' size='small' onClick={copy}>{languageObj.copyBtnText}</Button>

                    </Space>


                </div>

            </div>
            <div className='subtitle'>

                <Text className='subtitle-text'>
                    <PushpinFilled style={{ color: "#b37feb", display: 'inline-block' }} />
                    &nbsp;
                    {_language === 'CN' ? prompt.remark : prompt.remark_en}
                </Text>

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

}

export default PromptsCard