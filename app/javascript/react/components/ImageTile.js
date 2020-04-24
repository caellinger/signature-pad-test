import React from 'react'

const ImageTile = (props) => {
  const imageLocation = `/images/${props.image.image}`
  // const image = require(`${imageLocation}`)
  // let image = require({imageLocation})
  return (
    <img src={imageLocation} />
  )
}

export default ImageTile
