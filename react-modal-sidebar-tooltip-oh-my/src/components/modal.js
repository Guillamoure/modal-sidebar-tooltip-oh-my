import React from 'react'

const Modal = props => {
  return (
    <React.Fragment>
      <main id='faded-background' onClick={() => props.toggleModal(false)}/>
      <section id='modal'>Sample Modal</section>
    </React.Fragment>
  )
}

export default Modal
