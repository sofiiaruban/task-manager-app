import React from 'react'
import Table from 'react-bootstrap/Table'
import { AddOrUpdateButton } from '../components/AddOrUpdateButton'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' 
import { RootState } from '../redux/store'
import { deleteTask } from '../redux/tasks/tasksSlice' 
import { Task } from '../types/types'
import { IconButton } from '../components/IconButton'
import edit from '../assets/edit.svg'
import trash from '../assets/trash.svg'
import done from '../assets/check_ring.svg'
import progress from '../assets/progress.svg'

export const Dashboard: React.FC = () => {
  const tasksList = useSelector((state: RootState) => state.tasks)

  const dispatch = useDispatch();
  const handleDelete = (taskId: string) => {
    dispatch(deleteTask(taskId))
  }


  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th colSpan={4}>Completion</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasksList
            ? tasksList.map((task: Task) => (
                <tr key={task.id}>
                  <th>{task.task}</th>
                  <th>{task.description}</th>
                  <th colSpan={4} style={{ textAlign: 'center' }}>
                    {task.completion ? (
                      <IconButton src={done} />
                    ) : (
                      <IconButton src={progress} />
                    )}
                  </th>
                  <th style={{ textAlign: 'center' }}>
                    <Link to={`/task/${task.id}`}>
                      <IconButton src={edit} />
                    </Link>
                  </th>
                  <th style={{ textAlign: 'center' }}>
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
    </>
  )
}
