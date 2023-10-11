import React from 'react'
import Image from 'react-bootstrap/Image'
import { IconButtonProps } from '../types/IconButtonProps'


export const IconButton: React.FC<IconButtonProps> = ({ src, onClick, imgDesc }) => {
  return (
    <Image
      role="button"
      src={src}
      alt={imgDesc}
      onClick={onClick}
      fluid
      style={{ cursor: 'pointer' }}
    />
  )
}
