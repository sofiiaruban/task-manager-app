import React, {ChangeEvent} from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { StatusSelectProps } from '../types/StatusSelectProps'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

export const StatusSelect: React.FC<StatusSelectProps> = ({ onSelectOption }) => {

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value
    onSelectOption(selectedValue)
  }

  return (
    <Row>
      <Col xs={12} className="d-flex justify-content-end">
        <OverlayTrigger
          key="right"
          placement="right"
          overlay={<Tooltip>Select</Tooltip>}
        >
          <Form.Select
            aria-label="status select"
            className="w-25"
            onChange={handleChange}
          >
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="in progress">In progress</option>
          </Form.Select>
        </OverlayTrigger>
      </Col>
    </Row>
  )
}
