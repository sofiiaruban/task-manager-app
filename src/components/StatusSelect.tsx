import React, {ChangeEvent} from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { StatusSelectProps } from '../types/StatusSelectProps'

export const StatusSelect: React.FC<StatusSelectProps> = ({ onSelectOption }) => {

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value
    onSelectOption(selectedValue)
  }

  return (
    <Row>
      <Col xs={12} className='d-flex justify-content-end'>
        <Form.Select
          aria-label='status select'
          className='w-50'
          onChange={handleChange}
        >
          <option value='all'>All</option>
          <option value='done'>Done</option>
          <option value='in progress'>In progress</option>
        </Form.Select>
      </Col>
    </Row>
  )
}
