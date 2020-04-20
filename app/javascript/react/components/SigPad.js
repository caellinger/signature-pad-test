import React from 'react'
import SignaturePad from 'react-signature-canvas'

const SigPad = (props) => {
  return (
    <div className="sigPadContainer">
      <SignaturePad
        penColor='green'
      />
    </div>
  )
}

export default SigPad
