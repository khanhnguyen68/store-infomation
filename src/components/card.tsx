import { Card, Row, Col, Button } from 'antd';
import { useState, useEffect } from 'react';
import React from 'react';
import ModalEdit from './modal';

const { Meta } = Card;

const CardItem: React.FC = () => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
      <div className="text-uppercase text-left">
        <strong>store info</strong>
        <Row>
          <Col span={8}>Name</Col>
          <Col span={16}>jfoiwej</Col>
        </Row>
        <Row>
          <Col span={8}>Address</Col>
          <Col span={16}>jfoiwej</Col>
        </Row>
        <Row>
          <Col span={8}>Phone</Col>
          <Col span={16}>jfoiwej</Col>
        </Row>
        <strong>red invoice</strong>
        <Row>
          <Col span={8}>Company Name</Col>
          <Col span={16}>jfoiwej</Col>
        </Row>
        <Row>
          <Col span={8}>Address</Col>
          <Col span={16}>jfoiwej</Col>
        </Row>
        <Row>
          <Col span={8}>MST</Col>
          <Col span={16}>jfoiwej</Col>
        </Row>
        <ModalEdit />
      </div>
    </Card>
  );
}

export default CardItem;