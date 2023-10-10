//import React from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { AddOrUpdateButton } from '../components/AddOrUpdateButton'

export const TaskPage = ({ editMode }: { editMode?: boolean}) => {
  return (
    <>
      <h3>{editMode ? 'Update Your Task' : 'Create a Task'}</h3>
      <Form>
        <Col className="mb-3">
          <Form.Group as={Row} md="6" className="mb-3">
            <Form.Label>Task: </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter a task"
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Row} md="6" className="mb-3">
            <Form.Label>Description: </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter a description"
            ></Form.Control>
          </Form.Group>
          { editMode ? (<Form.Group as={Col} md="6">
            <Form.Label className="ml-0">Completion: </Form.Label>
            <Form.Check
              type="radio"
              id={`default-radio`}
              name="completion"
              label={'done'}
            />
          </Form.Group>) : null
          }
        </Col>
        <AddOrUpdateButton title={editMode ? "Update your task" : "Add a new task"}/>
      </Form>
    </>
  )
}
