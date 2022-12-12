import React from 'react'
import './Modal.css'

const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onBackdropClick}></div>
}

const ModalOverlay = (props) => {
    return <div className="form-modal">
        <div className="modal-content">{props.children}</div>
    </div>
}


function Modal(props) {
  return (
    <>
      <Backdrop onBackdropClick={props.onCloseModal}/>
      <ModalOverlay >{props.children}</ModalOverlay>
    </>
  )
}

export default Modal
