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
        <strong>BASIC INFO</strong>
        <Form.Item label="Store Name">
          {getFieldDecorator('storeName', {
            rules: [{ required: true, message: 'Please input the title of collection!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Store address">
          {getFieldDecorator('address')(
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
        <Form.Item label="Phone #">
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input the title of collection!' }],
          })(<Input />)}
        </Form.Item>
      </Form>
    );
  }
}

const App = Form.create<any>({
  name: 'form-edit'
})(EditForm);
export default App;