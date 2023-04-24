import React, { useState, useEffect } from 'react';
import { Button, Row, Col } from 'antd';
import { Typography } from 'antd';
import './Act2Prompt.scss'

import {
    EditFilled
} from '@ant-design/icons';

import { Tags, TagList, TagType } from "../../assets/data/act";
import {  getDataBytags, Prompt } from '../../assets/data/prompt'
import TagsGroup from '../../components/TagsGroup/TagsGroup';
import PromptCard from  '../../components/PromptCard/PromptCard'


const { Title } = Typography;


function Act2Prompt() {

    const [promptCardsData, setPromptCardsData] = useState<Prompt[]>()
    const [searchTags, setSearchTags] = useState<TagType[]>([])

    useEffect(() => {
        setPromptCardsData(getDataBytags(searchTags))
    },[searchTags])


    const tagClick = (tag:TagType[]) => {
        setSearchTags(tag)
    }

    const promptCards = () => {
        if(!promptCardsData){
            return null
        }
        let cards = []
        for (let index = 0; index < promptCardsData.length; index++) {
            const prompt = promptCardsData[index];
            const language = prompt.language as string
            cards.push(
                <Col span={6} key={index}>
                    <PromptCard prompt={prompt} Tags={Tags} language={language}  />
                </Col>
            )
        }

        return cards
    }

    return (
        <div className='act2prompt'>
            <div className='theme'>
                <Title className='title'>
                    AIGC-提示词大全
                </Title>
                <Title level={5} className='subtitle'>让生产力加倍的AIGC提示词</Title>
                <div className='add-prompt'>
                    <Button 
                        size='middle' 
                        href='https://github.com/Aixiaolei/aigc-act2prompt/discussions'
                        type="primary"
                        icon={<EditFilled />}
                        target='_blank'
                    >请添加你的提示词</Button>
                </div>
            </div>
            <TagsGroup tagList={TagList} tagData={Tags} clickCallBack={tagClick}/>
            <Row gutter={[16, 24]} >
                { promptCards() }
            </Row>
        </div >
    )
}

export default Act2Prompt