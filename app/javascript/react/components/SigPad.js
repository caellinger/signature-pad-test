import React, { useState } from 'react'
import SignatureCanvas from 'react-signature-canvas'

const SigPad = () => {
  const [imageSubmitted, setImageSubmitted] = useState(false)

  let submitHandler = (event) => {
    event.preventDefault()

    if (this.sigCanvas.isEmpty()) {
      alert("You can't submit an empty drawing!");
    } else {
      let dataURL = {image: `${this.sigCanvas.toDataURL("image/jpeg")}`}

      fetch("/api/v1/images", {
        credentials: "same-origin",
        method: "POST",
        body: JSON.stringify(dataURL),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        if (response.ok) {
          setImageSubmitted(true)
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
          throw error
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))

      this.sigCanvas.clear()
    }
  }

  return (
    <div className="sigPadContainer">
      <SignatureCanvas
        ref={(ref) => { this.sigCanvas = ref }}
        penColor='green'
      />
    <button type="button" className="button save" onClick={submitHandler}>Save</button>
    </div>
  )
}

export default SigPad
