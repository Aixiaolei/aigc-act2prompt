import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Input } from 'antd';
import { Typography } from 'antd';
import './Act2Prompt.scss'

import {
    EditFilled
} from '@ant-design/icons';

import { Tags, TagList, TagType } from "../../assets/data/act";
import { getDataBytags, Prompt } from '../../assets/data/prompt'
import TagsGroup from '../../components/TagsGroup/TagsGroup';
import PromptCard from '../../components/PromptCard/PromptCard'

import { PromptWordEditor } from '../../components'

import { throttle } from 'lodash-es';



const { Title } = Typography;
const { Search } = Input;


const Act2Prompt = () => {
    const [promptCardsData, setPromptCardsData] = useState<Prompt[]>()
    const [searchTags, setSearchTags] = useState<TagType[]>([])
    const [searchStr, setSearchStr] = useState('')

    useEffect(() => {
        setPromptCardsData(getDataBytags(searchTags, searchStr))
    }, [searchTags, searchStr])


    const tagClick = (tag: TagType[]) => {
        setSearchTags(tag)
    }

    const promptCards = () => {
        if (!promptCardsData) {
            return null
        }
        let cards = []
        for (let index = 0; index < promptCardsData.length; index++) {
            const prompt = promptCardsData[index];
            const language = prompt.language as string
            cards.push(
                <Col span={6} key={index}>
                    <PromptCard prompt={prompt} Tags={Tags} language={language} />
                </Col>
            )
        }

        return cards
    }

    const cardsSearch = (value:string) => {
        setSearchStr(value)
    }

    return (
        <>
            <PromptWordEditor />
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

                <TagsGroup tagList={TagList} tagData={Tags} clickCallBack={tagClick} />

                <div>
                    <Search
                        placeholder="提示词搜索"
                        allowClear
                        enterButton="搜索"
                        size="large"
                        onSearch={cardsSearch}
                        className='prompt-cards-search'
                    />
                    <Row gutter={[16, 24]} >
                        {promptCards()}
                    </Row>
                </div>
            </div >

        </>

    )



}



export default Act2Prompt