import { Modal, Row, Col, Button } from 'antd';
import { useState, useEffect } from 'react';
import React from 'react';
import UploadImage from './upload';
import EditForm from './form';

import sharedStore from '../duck/store'

const ModalEdit: React.FC = () => {
  const [store, dispatch] = sharedStore()
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirm] = useState(false)

  console.log(11111, store, dispatch);

  const handleOk = () => {
    setVisible(false)
    // dispatch({type: 'LOAD_DATA'})
  }
  const handleCancel = () => {
    setVisible(false)
  }
  const showModal = () => {
    setVisible(true)
  }
  const props = {
    id: 'string',
    logoUrl: 'string',
    name: 'string',
    address: 'string',
    district: 'string',
    city: 'string',
    phone: 'string',
    redInvoice: {
      name: 'string',
      address: 'string',
      district: 'string',
      city: 'string',
      taxCode: 'string',
    },
  }
  return (
    <div>
      <Button block type="primary" onClick={showModal}>
        Edit Profile
      </Button>
      <Modal
        title="Edit Store Profile"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={'70%'}
      >
        <Row gutter={16}>
          <Col span={10}>
            <strong>STORE IMAGE</strong>
            <UploadImage />
          </Col>
          <Col span={14}>
            <EditForm {...props}/>
          </Col>
        </Row>
      </Modal>
    </div>
  );
}
export default ModalEdit;