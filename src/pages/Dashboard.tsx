//import React from 'react'
import Table from 'react-bootstrap/Table'
import { AddButton } from '../components/AddButton'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
      <Link to="/task">
        <AddButton />
      </Link>
    </>
  )
}
