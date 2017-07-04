import React from 'react'
import {Table, Icon} from 'antd'

export default class myTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tDate: [],
            selectedRowKeys: []
        }
    }

    componentDidMount() {
        const data = []

        for (let i = 0; i < 46; i++) {
            data.push({
                key: i,
                name: `HPE`,
                age: 18,
                address: `重庆市沙坪坝区西永镇西园一路108号`,
                remark: '',
                operate: 'none'
            })
        }

        this.setState({
            tDate: data
        })
    }

    // checkbox
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys)
        this.setState({ selectedRowKeys })
    }

    render() {
        const columns = [{
            title: 'Name',
            width: '20%',
            dataIndex: 'name'
        }, {
            title: 'Age',
            width: '20%',
            dataIndex: 'age',
        }, {
            title: 'Address',
            width: '20%',
            dataIndex: 'address'
        }, {
            title: 'Remark',
            width: '20%',
            dataIndex: 'remark',
            render(text) {
                return <a href={text} target="_blank">Links</a>
            }
        }, {
            title: 'Operate',
            width: '20%',
            dataIndex: 'operate'
        }]

        const { selectedRowKeys } = this.state

        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange
        }

        const pagination = {
            total: this.state.tDate.length,
            showSizeChanger: true,
            onShowSizeChange(current, pageSize) {
                console.log('Current: ', current, '; PageSize: ', pageSize)
            },
            onChange(current) {
                console.log('Current: ', current)
            }
        }

        return (
            <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.tDate} bordered pagination={pagination} />
        )
    }
}
