import React from 'react'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

interface IconButtonProps {
  src: string
  onClick: () => void
} 

export const IconButton: React.FC<IconButtonProps> = ({ src, onClick }) => {
  return (
    <Button>
      <Image
        src={src}
        onClick={onClick}
        fluid 
        style={{ cursor: 'pointer' }}
      />
    </Button>
  )
}
