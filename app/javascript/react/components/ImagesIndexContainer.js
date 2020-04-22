import React, { useState, useEffect } from 'react'

import ImageTile from './ImageTile'

const ImagesIndexContainer = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch("/api/v1/images.json")
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => {
      return response.json()
    })
    .then(body => {
      setImages(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const imagesArray = images.map(image => {
    return (
      <ImageTile
        key={image.id}
        image={image}
      />
    )
  })

  return (
    <div>
      <h3>Submitted Images</h3>
      <ul>
        {imagesArray}
      </ul>
    </div>
  )
}

export default ImagesIndexContainer
