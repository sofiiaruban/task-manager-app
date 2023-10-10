//import React from 'react'
import Table from 'react-bootstrap/Table'
import { AddButton } from '../components/AddButton'

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
      <AddButton />
    </>
  )
}
