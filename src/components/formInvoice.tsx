import { Form, Input, Select, Row, Col, Button } from 'antd';
import React from 'react';
import { StoreFromProps } from '../common/constants';

const Option = Select.Option

class EditForm extends React.Component<any, any> {
  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form layout="vertical">
        <strong>RED INVOICE INFO</strong>
        <Form.Item label="Company Name">
          {getFieldDecorator('storeName', {
            rules: [{ required: true, message: 'Please input the title of collection!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Company address">
          {getFieldDecorator('storeAddress')(
            <Row gutter={8}>
              <Col span={8}>
                <Input />
              </Col>
              <Col span={8}>
                <Select
                  showSearch
                  placeholder="District"
                  optionFilterProp="children"
                  filterOption={(input, option: any) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Col>
              <Col span={8}>
                <Select
                  showSearch
                  placeholder="City"
                  optionFilterProp="children"
                  filterOption={(input, option: any) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>

              </Col>
            </Row>
          )}
        </Form.Item>
        <Form.Item label="MST">
          {getFieldDecorator('taxCode', {
            rules: [{ required: true, message: 'Please input the title of collection!' }],
          })(<Input />)}
        </Form.Item>
      </Form>
    );
  }
}

const App = Form.create<any>({
  name: 'form-invoice'
})(EditForm);
export default App;