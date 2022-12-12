import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './DeleteUser.css'
import Modal from '../modal/Modal';

function DeleteUser(props) {
    return (
        <Modal onCloseModal={props.onDeleteClose}>
        <div className='del-container'>
            <div className="del-content">
                <div className="question">
                    <p>Are you sure you want to delete</p>
                    <span>
                        <CloseIcon onClick={props.onDeleteClose}/>
                    </span>

                </div>
                <div className="buttons">
                    <button className="Cancel-button" onClick={props.onDeleteClose}>Cancel</button>
                    <button className="Delete-button" onClick={props.onDeleteconfirm}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
        </Modal>
    )
}

export default DeleteUser
