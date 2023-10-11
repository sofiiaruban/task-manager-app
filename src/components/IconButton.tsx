import React from 'react'
import Image from 'react-bootstrap/Image'
import { IconButtonProps } from '../types/IconButtonProps'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'


export const IconButton: React.FC<IconButtonProps> = ({ src, onClick, imgDesc, tooltip }) => {
  return (
    <OverlayTrigger
      key='top'
      placement='top'
      overlay={
        <Tooltip>{tooltip}</Tooltip>
      }
    >
      <Image
        role="button"
        src={src}
        alt={imgDesc}
        onClick={onClick}
        fluid
        style={{ cursor: 'pointer' }}
      />
    </OverlayTrigger>
  )
}
