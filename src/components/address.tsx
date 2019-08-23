import { useState, useEffect } from 'react'
import React from 'react'
import { Row, Col, Select, Input} from 'antd'

const Option = Select.Option

type AddressProps = {
  value: {
    address: string,
    district: string,
    city: string,
  }
}
const AddressComponent = (props: AddressProps) => {
  const value = props.value || {};
  const [address, setAddress] = useState(value.address)
  const [district, setDistrict] = useState(value.district)
  const [city, setCity] = useState(value.city)

  return (
    <Row gutter={8}>
      <Col span={8}>
        <Input type="text" value={address}/>
      </Col>
      <Col span={8}>
        <Select
          value={district}
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
          value={city}
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
  )
}
export default AddressComponent