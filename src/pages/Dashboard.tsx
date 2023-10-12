import React, {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table'
import { AddOrUpdateButton } from '../components/AddOrUpdateButton'
import { StatusSelect } from '../components/StatusSelect'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' 
import { RootState } from '../redux/store'
import { addTask, deleteTask, updateCompletion } from '../redux/tasks/tasksSlice' 
import { Task } from '../types/Task'
import { IconButton } from '../components/IconButton'
import edit from '../assets/edit.svg'
import trash from '../assets/trash.svg'
import done from '../assets/check_ring.svg'
import progress from '../assets/progress.svg'
import Container from 'react-bootstrap/Container'
import useLocalStorage from '../hooks/useLocalStorage'

export const Dashboard: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState('all')
  const tasksList = useSelector((state: RootState) => state.tasks)
  const dispatch = useDispatch()
  const [storageTasks, { deleteTaskById, updateTaskById }] = useLocalStorage(
    'tasks',
    []
  )

  // event handlers
  const handleDelete = (taskId: string) => {
    dispatch(deleteTask(taskId))
    deleteTaskById(taskId)
  }
  const handleStatusSelect = (selectedValue: string) => {
    setSelectedStatus(selectedValue)
  }
  const handleToggleCompletion = (taskId: string, completion: string) => {
    const newCompletion = completion === 'done' ? 'in progress' : 'done'
    dispatch(updateCompletion({ id: taskId, completion: newCompletion }))
    updateTaskById(taskId, {completion: newCompletion})
  }

  // filter func
  const filteredTasks =
    selectedStatus === 'all'
      ? tasksList
      : tasksList.filter((task: Task) => task.completion === selectedStatus)

 // push to store task if page reloading
  useEffect(() => {
    if (tasksList.length === 0 && storageTasks.length > 0) {
      storageTasks.forEach((task: Task) => {
        if (!tasksList.some((t) => t.id === task.id)) {
          dispatch(addTask(task))
        }
      })
    }
  }, [dispatch, tasksList, storageTasks])

  return (
    <Container>
      <StatusSelect onSelectOption={handleStatusSelect} />
      <Table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th colSpan={4}>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task: Task) => (
              <tr key={task.id}>
                <td>{task.task}</td>
                <td>{task.description}</td>
                <td colSpan={4} className='text-center'>
                  {task.completion === 'done' ? (
                    <IconButton
                      src={done}
                      imgDesc='Check'
                      onClick={() => handleToggleCompletion(task.id, task.completion)} 
                      tooltip='Task is done'
                    />
                  ) : (
                    <IconButton
                        src={progress}
                        imgDesc='Progress'
                        onClick={() => handleToggleCompletion(task.id, task.completion)}
                        tooltip='Task is in progress'
                    />
                  )}
                </td>
                <td className='text-center'>
                  <Link to={`/task/${task.id}`}>
                    <IconButton src={edit} imgDesc='Pencil' tooltip='Edit the task' />
                  </Link>
                </td>
                <td className='text-center'>
                  <IconButton
                    src={trash}
                    imgDesc='Trash can'
                    onClick={() => handleDelete(task.id)} tooltip='Delete the task'
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8}>There are no tasks yet.</td>
            </tr>
          )}
        </tbody>
      </Table>
      <Link to='/task'>
        <AddOrUpdateButton title='Add a new task' />
      </Link>
    </Container>
  )
}
