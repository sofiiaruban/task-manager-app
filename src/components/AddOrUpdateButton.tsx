//import React from 'react'
import Button from 'react-bootstrap/Button'

export const AddOrUpdateButton = ({title}: {title: string}) => {
  return <Button variant="info" type='submit'>{title}</Button>
}
