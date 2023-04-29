import React, { useState,ChangeEvent } from 'react';
import { Card, Space, Tag, Button, Typography, message, Drawer, Input } from 'antd'
import { determineLanguageType } from '../../utils/index'
import { Prompt } from '../../assets/data/prompt'


import { TagType, TypeOfTag } from "../../assets/data/act";
import './promptCard.scss'


import {
    PushpinFilled
} from '@ant-design/icons'

const { Title, Text } = Typography;
const { TextArea } = Input;

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

    //弹出窗数据
    const [modelData, setModelData] = useState<Prompt | null>()

    const [openEditModel, setOpenEditModel] = useState(false)
    //弹出窗修改后的数据
    const [copyValue, setCopyValue] = useState('')


    const copyValueChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setCopyValue(e.target.value)
    }



    const obtainThePreviousContent = () => {
        console.log(copyValue)
    }





    const edit = () => {
        setOpenEditModel(true)
        setCopyValue(prompt.desc_cn)
    }


    const onClose = () => {
        setOpenEditModel(false);
    };



    const copy = () => {
        navigator.permissions.query({ name: "clipboard-write" as PermissionName }).then(result => {
            // 如果有权限，或者用户同意授予权限
            if (result.state === "granted" || result.state === "prompt") {
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
        <>
            <Drawer
                title={`提示词编辑`}
                placement="right"
                size='large'
                onClose={onClose}
                open={openEditModel}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button type="primary" onClick={onClose}>
                            OK
                        </Button>
                    </Space>
                }
            >
                <div style={{marginBottom:'16px'}}>
                    <Button onClick={obtainThePreviousContent}>获取上一次修改的内容</Button>
                    <Button style={{marginLeft:'8px'}}>复制修改后的内容</Button>
                </div>
                <TextArea rows={20} value={copyValue} onChange={copyValueChange} style={{fontSize:'22px'}}/>


            </Drawer>
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
                            <Button className='' size='small' onClick={edit}>{languageObj.editBtnText}</Button>


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

        </>


    )

}

export default PromptsCard