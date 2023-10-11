import React, {useState} from 'react'
import Table from 'react-bootstrap/Table'
import { AddOrUpdateButton } from '../components/AddOrUpdateButton'
import { StatusSelect } from '../components/StatusSelect'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' 
import { RootState } from '../redux/store'
import { deleteTask } from '../redux/tasks/tasksSlice' 
import { Task } from '../types/Task'
import { IconButton } from '../components/IconButton'
import edit from '../assets/edit.svg'
import trash from '../assets/trash.svg'
import done from '../assets/check_ring.svg'
import progress from '../assets/progress.svg'
import Container from 'react-bootstrap/Container'

export const Dashboard: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState('all')
  const tasksList = useSelector((state: RootState) => state.tasks)
  const dispatch = useDispatch()

  // event handlers
  const handleDelete = (taskId: string) => {
    dispatch(deleteTask(taskId))
  }

  const handleStatusSelect = (selectedValue: string) => {
    setSelectedStatus(selectedValue)
  }

  // filter func
  const filteredTasks = selectedStatus === 'all' ? tasksList : tasksList.filter((task) => task.completion === selectedStatus)
  
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
          {filteredTasks
            ? filteredTasks.map((task: Task) => (
                <tr key={task.id}>
                  <th>{task.task}</th>
                  <th>{task.description}</th>
                  <th colSpan={4} className="text-center">
                    {task.completion === 'done' ? (
                      <IconButton src={done} />
                    ) : (
                      <IconButton src={progress} />
                    )}
                  </th>
                  <th className="text-center">
                    <Link to={`/task/${task.id}`}>
                      <IconButton src={edit} />
                    </Link>
                  </th>
                  <th className="text-center">
                    <IconButton
                      src={trash}
                      onClick={() => handleDelete(task.id)}
                    />
                  </th>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
      <Link to="/task">
        <AddOrUpdateButton title="Add a new task" />
      </Link>
    </Container>
  )
}
