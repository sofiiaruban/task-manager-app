//import React from 'react'

export const TaskPage = ({editMode}: {editMode?: boolean}) => {
  return (
    <>
      <div>TaskPage</div>
      {editMode ? 'editMode' : 'not editMode'}
    </>
  )
}
