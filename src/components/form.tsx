import { Form, Input, Select, Row, Col, Button } from 'antd';
import React from 'react';
import { StoreFromProps } from '../common/constants';
import FormBasic from './formBasic';
import FormInvoice from './formInvoice';

const Option = Select.Option

class EditForm extends React.Component<StoreFromProps, any> {
  render() {
    return (
      <div>
        <FormBasic />
        <FormInvoice />
        <Button block type="primary">Save</Button>
        <Button block>Cancel</Button>
      </div>
    );
  }
}

const App = Form.create<StoreFromProps>({
  name: 'form-edit'
})(EditForm);
export default App;