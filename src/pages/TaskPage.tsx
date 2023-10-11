//import React from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { AddOrUpdateButton } from '../components/AddOrUpdateButton'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { uid } from 'uid';
import { addTask, editTask} from '../redux/tasks/tasksSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { RootState } from '../redux/store'
import { Task } from '../types/Task'


export const TaskPage = ({ editMode }: { editMode?: boolean}) => {
  const [formData, setFormData] = useState({
    id: uid(),
    completion: '',
    task: '',
    description: '',
  })
  const navigate = useNavigate()
  const { id } = useParams<{ id: string | undefined }>()
  const dispatch = useDispatch()
  const tasksList = useSelector((state: RootState) => state.tasks)

 //event handlers
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const name = e.target.name

    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!editMode) {
      dispatch(addTask(formData))
    }
    if (editMode) {
      dispatch(editTask(formData))
    }
    
    navigate('/')
  }

  //get task from store
  const getTaskFromStore = (taskId: string | undefined) => {
    const selectedTask = tasksList?.find((task: Task) => task.id === taskId)
    if (selectedTask) {
      setFormData(selectedTask)
    }
  }
  useEffect(()=> {
    if (editMode) {
      getTaskFromStore(id)
    }
  }, [editMode, id])

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
          <Form.Group as={Col} md="6">
            <Form.Label className="ml-0">Completion: </Form.Label>
            <Form.Check
              type="radio"
              name="completion"
              label="in progress"
              value={'in progress'}
              checked={formData.completion === 'in progress'}
              onChange={handleChange}
            />
            <Form.Check
              type="radio"
              name="completion"
              label="done"
              value={'done'}
              checked={formData.completion === 'done'}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <AddOrUpdateButton
          title={editMode ? 'Update your task' : 'Add a new task'}
        />
      </Form>
    </>
  )
}
