import React, { useState, useMemo } from 'react';
import { Card, Space, Tag, Tooltip, Button, Row, Col } from 'antd';
import { TagType, TypeOfTag } from "../../assets/data/act";
import { Prompts } from '../../assets/data/prompt'
import { Typography } from 'antd';
import './TagsGroup.scss'

const { Title, Text } = Typography;

type typeTagGroup = {
    tagList: TagType[],
    tagData: { [type in TagType]: TypeOfTag },
    clickCallBack: (tag: TagType[]) => void;
}

function TagsGroup(tagGroup: typeTagGroup) {

    const { tagList, tagData, clickCallBack } = tagGroup
    const [selectedTags, setSelectedTags] = useState<TagType[]>([]);


    const tabClick = (item: TagType) => {
        return function () {

            let index = selectedTags.indexOf(item)

            if (index === -1) {
                selectedTags.push(item)
                setSelectedTags([...selectedTags])
            } else {
                selectedTags.splice(index, 1)
                setSelectedTags([...selectedTags])
            }

            clickCallBack(selectedTags)
        }
    }


    return (
        <div className='tabs-group'>
            <div className='summary-info'>
                <div className='all-prompts'>
                    <Title level={4} className='subtitle'>All Prompts:&nbsp;{Prompts.length}</Title>
                </div>
            </div>
            <Space size={[8, 8]} wrap className='tabs-group'>
                {
                    tagList.map(item => {
                        const tap = tagData[item]
                        const color = tap.color
                        return (
                            <Button
                                type={selectedTags.includes(item) ? "primary" : "default"}
                                onClick={tabClick(item)} size="small"
                                key={tap.description.id}
                            >
                                {tap.label}
                                <span className='circular-icon' style={{ backgroundColor: color }}></span>
                            </Button>
                        )
                    })
                }

            </Space>

        </div>

    )
}

export default TagsGroup