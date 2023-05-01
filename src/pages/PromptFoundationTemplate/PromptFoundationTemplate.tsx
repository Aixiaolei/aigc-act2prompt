import React from "react";
import { PromptFoundationTemplate } from '../../assets/data/promptFoundationTemplate'
import { Row, Typography, Col } from 'antd'
import { Tags } from "../../assets/data/act";
import PromptCard from '../../components/PromptCard/PromptCard'

import './PromptFoundationTemplate.scss'

const { Title } = Typography;

function SuffixPrompt() {

    function createSuffixPromptCards() {
        let cards = []
        for (let index = 0; index < PromptFoundationTemplate.length; index++) {
            const prompt = PromptFoundationTemplate[index];
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
                    AIGC-提示词大全-提示词模板
                </Title>
                <Title level={5} className='subtitle'>
                    特别注意：这里面的例子基本没有什么应用场景，比较抽象，之后我会在我的掘金把每个模板做一些例子出来供大家参看
                </Title>
            </div>
            <Row gutter={[16, 24]} >
                {createSuffixPromptCards()}
            </Row>
        </div >
    )
}

export default SuffixPrompt