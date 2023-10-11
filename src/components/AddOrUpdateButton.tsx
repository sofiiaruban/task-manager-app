import React from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { AddOrUpdateBtnProp } from '../types/AddOrUpdateButton'


export const AddOrUpdateButton: React.FC<AddOrUpdateBtnProp> = ({ title }) => {
  return (
    <Col className="d-flex justify-content-end px-0">
      <Button variant="info" type="submit" className="w-50">
        {title}
      </Button>
    </Col>
  )
}
