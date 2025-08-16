import React from 'react'
import styles from './StepUsername.module.css'

const StepUsername = ({onNext}) => {
  return (
     <>
      <div>
      Username Component
      </div>

      <button onClick={onNext}>Next</button>
    </>
  )
}

export default StepUsername
