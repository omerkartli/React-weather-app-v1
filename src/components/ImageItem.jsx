import React from 'react'

export default function ImageItem({image,onClick}) {
  return (
    <div><img
    className="day"
    src={image}
    alt="dayimage"
    onClick={onClick}
  /></div>
  )
}
