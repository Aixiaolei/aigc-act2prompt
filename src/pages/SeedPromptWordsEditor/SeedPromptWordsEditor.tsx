import React from "react";
import { Table,Space,Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';

export type SeedPromptWordsEditorDataType = {
    name: string,
    seedContent:string,
    operate?:boolean,
    editable?:boolean,
}


const columns: ColumnsType<SeedPromptWordsEditorDataType> = [
    {
        title: '种子名称',
        dataIndex: 'name',
        key: 'name',
        width:200
    },
    {
        title: '提示词内容',
        dataIndex: 'seedContent',
        key: 'seedContent',
    },
    {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        render: (_, { name, seedContent, operate }) => {
            return(
                <Space>
                    <Button size="small">编辑</Button>
                    <Button size="small">删除</Button>
                </Space>
                
            ) 
        },
        width:300
    }
]

const data: SeedPromptWordsEditorDataType[] = [
    {
        name: 'John Brown',
        seedContent:"aaa,bbb"
    }
];

function SeedPromptWordsEditor() {
    return (
        <>
        <Space className="btn-group">
            <Button>新增</Button>
            <Button>打开编辑器</Button>
        </Space>
        <Table columns={columns} dataSource={data} />
        </>


    )
}

export default SeedPromptWordsEditor