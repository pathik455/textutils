import React from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="myBox">Enter text</label>
            <textarea className="form-control" id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary">Convert to uppercase</button>
  </div>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string,
}
