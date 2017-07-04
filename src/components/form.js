import React from 'react'
import { Form, Input, Select, Checkbox, DatePicker, Col, Radio, Button, Modal, message } from 'antd'

const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group

class myForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    // select
    handleSelectChange = (value) => {
        console.log(`selected ${value}`)
    }

    // submit form
    handleSubmit = (e) => {
        e.preventDefault()
        console.log('value get', this.props.form.getFieldsValue())

        this.props.form.resetFields()
    }


    // display
    showModal = () => {
        this.setState({ visible: true })
    }


    // hide
    hideModal = () => {
        this.setState({ visible: false })
    }

    render() {
        const { getFieldProps } = this.props.form

        const formItemLayout = {
            labelCol: { span: 3 },
            wrapperCol: { span: 6 }
        }

        const success = function () {
            message.success('success!');
        }

        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormItem
                    id="control-input"
                    label="Enter"
                    {...formItemLayout}
                    required>
                    <Input id="control-input" placeholder="Please enter..."
                    {...getFieldProps('userName')} />
                </FormItem>

                <FormItem
                    label="Date"
                    labelCol={{ span: 3 }}
                    required>
                    <Col span="2">
                        <FormItem>
                            <DatePicker {...getFieldProps('startDate')} />
                        </FormItem>
                    </Col>
                    <Col span="1">
                        <p className="ant-form-split">-</p>
                    </Col>
                    <Col span="2">
                        <FormItem>
                            <DatePicker {...getFieldProps('endDate')} />
                        </FormItem>
                    </Col>
                </FormItem>

                <FormItem
                    id="control-textarea"
                    label="textarea"
                    {...formItemLayout}>
                    <Input type="textarea" id="control-textarea" rows="3" 
                    {...getFieldProps('content')} />
                </FormItem>

                <FormItem
                    id="select"
                    label="Select"
                    {...formItemLayout}>
                    <Select id="select" size="large" defaultValue="HPE" style={{ width: 200 }} onChange={this.handleSelectChange}
                        {...getFieldProps('people')}>
                        <Option value="jack">jack</Option>
                        <Option value="HPE">HPE</Option>
                        <Option value="disabled" disabled>disabled</Option>
                        <Option value="HPI">HPI</Option>
                    </Select>
                </FormItem>

                <FormItem
                    label="Checkbox multiple"
                    {...formItemLayout}
                >
                    <Checkbox className="ant-checkbox-inline" {...getFieldProps('checkboxItem1')}>Itme1</Checkbox>
                    <Checkbox className="ant-checkbox-inline" {...getFieldProps('checkboxItem2')}>Itme2</Checkbox>
                    <Checkbox className="ant-checkbox-inline" {...getFieldProps('checkboxItem3')}>Itme3</Checkbox>
                </FormItem>

                <FormItem
                    label="Radio single"
                    {...formItemLayout} >
                    <RadioGroup defaultValue="b" {...getFieldProps('radioItem')}>
                        <Radio value="a">A</Radio>
                        <Radio value="b">B</Radio>
                        <Radio value="c">C</Radio>
                        <Radio value="d">D</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem wrapperCol={{ span: 6, offset: 3 }} style={{ marginTop: 24 }}>
                    <Button type="primary" htmlType="submit" onClick={success}>OK</Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button type="ghost" onClick={this.showModal}>Popup</Button>
                </FormItem>
                <Modal title="login" visible={this.state.visible} onOk={this.hideModal} onCancel={this.hideModal}>
                    modal
                </Modal>
            </Form>
        )
    }
}

myForm = Form.create()(myForm)

export default myForm