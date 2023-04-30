import React from "react";
import { SuffixPromptData } from '../../assets/data/suffixPrompt'
import { Row, Typography, Col } from 'antd'
import { Tags } from "../../assets/data/act";
import PromptCard from '../../components/PromptCard/PromptCard'
import './SuffixPrompt.scss'

const { Title } = Typography;

function SuffixPrompt() {

    function createSuffixPromptCards() {
        let cards = []
        for (let index = 0; index < SuffixPromptData.length; index++) {
            const prompt = SuffixPromptData[index];
            const language = prompt.language as string
            cards.push(
                <Col span={6} key={index}>
                    <PromptCard prompt={prompt} Tags={Tags} language={language} />
                </Col>
            )
        }

        return cards

    }



    return (
        <div className='suffix-prompt'>
            <div className='theme'>
                <Title className='title'>
                    AIGC-提示词大全-后缀提示词
                </Title>
                <Title level={5} className='subtitle'>让生产力加倍的AIGC提示词</Title>
            </div>
            <Row gutter={[16, 24]} >
                {createSuffixPromptCards()}
            </Row>
        </div >
    )
}

export default SuffixPrompt