//import React from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { AddOrUpdateButton } from '../components/AddOrUpdateButton'
import { ChangeEvent, FormEvent, useState } from 'react'
import { uid } from 'uid';
import { addTask } from '../redux/tasks/tasksSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const TaskPage = ({ editMode }: { editMode?: boolean}) => {
  const [formData, setFormData] = useState({
    id: uid(),
    completion: false,
    task: '',
    description: '',
  })
  const navigate = useNavigate()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const name = e.target.name

    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
    console.log(formData)
  }
  const dispatch = useDispatch()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit')
    dispatch(addTask(formData))
    navigate('/')
  }
  return (
    <>
      <h3 style={{ textAlign: 'center' }}>
        {editMode ? 'Update Your Task' : 'Create a Task'}
      </h3>
      <Form onSubmit={handleSubmit}>
        <Col className="mb-3">
          <Form.Group as={Row} md="6" className="mb-3">
            <Form.Label>Task: </Form.Label>
            <Form.Control
              required
              type="text"
              name="task"
              value={formData.task || ''}
              onChange={handleChange}
              placeholder="Enter a task"
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Row} md="6" className="mb-3">
            <Form.Label>Description: </Form.Label>
            <Form.Control
              required
              type="text"
              name="description"
              value={formData.description || ''}
              onChange={handleChange}
              placeholder="Enter a description"
            ></Form.Control>
          </Form.Group>
          {editMode ? (
            <Form.Group as={Col} md="6">
              <Form.Label className="ml-0">Completion: </Form.Label>
              <Form.Check type="radio" name="completion" label={'done'} />
            </Form.Group>
          ) : null}
        </Col>
        <AddOrUpdateButton
          title={editMode ? 'Update your task' : 'Add a new task'}
        />
      </Form>
    </>
  )
}
