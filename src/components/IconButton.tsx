import React from 'react'
import Image from 'react-bootstrap/Image'

interface IconButtonProps {
  src? : string
  onClick?: () => void
} 

export const IconButton: React.FC<IconButtonProps> = ({ src, onClick }) => {
  return (
      <Image
        src={src}
        onClick={onClick}
        fluid
        style={{ cursor: 'pointer' }}
      />
  )
}
