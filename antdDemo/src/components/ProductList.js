import React from 'react';
import {Table,Popconfirm,Button} from 'antd';
import { connect } from 'dva';

const ProductList = ({onDelete,products}) => {
    const columns = [{
        title:'Name',
        dataIndex:'name'
    },{
        title:'Actions',
        render:(text,record)=>{
            return (
                <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
                    <Button>Delete</Button>
                </Popconfirm>
            )
        }
    }];
    return (
        <Table
            rowKey="name"
            dataSource={products}
            columns={columns}
        />
    )
};

function mapStateToProps(state){
    return {};
}
export default connect(mapStateToProps)(ProductList);