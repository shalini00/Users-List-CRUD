import React, { useEffect, useState, useContext } from 'react'
import { UsersContext } from '../context/UsersContext';
import DeleteUser from './DeleteUser';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { calculate_age } from './AgeCal';
import './Users.css'



function Users({ item }) {



    //Functions from Context
    const { deleteUser, updateInfo } = useContext(UsersContext);

    //This state and function is for accordion selection --- but didn't working properly
    const [selected, setSelected] = useState({
        show: false,
        id: null
    });

    const toggleAccordion = (id) => {
        const ind = +id;
        if (selected.id === ind && selected.show) {
            return setSelected({
                show: false,
                id: null
            })
        }
        setSelected({
            show: true,
            id: ind
        })
    }

    // Edit/Delete states and functions for closing and showing that state
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowdelete] = useState(false);


    const handleEditShow = () => {
        if (calculate_age(`${item.dob}`) >= 18) {
            setShowEdit(true)
        }
        else {
            alert("Sorry!!! You cannot edit the user below 18 years!")
        }
    };

   

    const handleDeleteShow = () => setShowdelete(true)
    const handleDeleteClose = () => setShowdelete(false)



    // ---- FOR EDITING VALUES AND UPDATING IT ---- //

    //setting initial values of the edit state
    const initialValues = {
        dob: item.dob,
        gender: item.gender,
        country: item.country,
        description: item.description
    }

    const [editValues, setEditValues] = useState(initialValues)

    //state for button disable/enable in editing mode
    const [disabled, setDisabled] = useState(true)

    //state for form validation
    const [error, setError] = useState({})
    const [isUpdated, setIsUpdated] = useState(false);


    //when user change something (or edit)
    const changeHandler = (e) => {
        setDisabled(false);
        const { name, value } = e.target;
        setEditValues({ ...editValues, [name]: value })


    }

    //Update info object to be passed in update function of context to set new values
    const updatedInfo = {
        id: item.id,
        first: item.first,
        last: item.last,
        dob: `${editValues.dob}`,
        gender: `${editValues.gender}`,
        picture: item.picture,
        country: `${editValues.country}`,
        description: `${editValues.description}`
    };


    //When user confirms to update the details
    const submitHandler = (e) => {
        e.preventDefault();
        setError(validate(editValues));
        setIsUpdated(true);

    }

    //According to error object updateInfo get rendered
    useEffect(() => {
        if (Object.keys(error).length === 0 && isUpdated) {
            updateInfo(item.id, updatedInfo)
        }
    }, [error])

const [isError, setIsError] = useState(false)
    //for error validation
    const validate = (values) => {
        const errors = {};
        const regex = /^[a-zA-Z ]*$/;

        if (!values.country) {
            errors.country = `Country can't be empty`;
            setIsError(true);
        } else if (!regex.test(values.country)) {
            errors.country = `Country must not contain numbers`;
            setIsError(true);
        }
        if (!values.description) {
            errors.description = `Description can't be empty`;
            setIsError(true);
        }
        if (!values.dob) {
            errors.dob = `DOB can't be empty`;
            setIsError(true);
        }
        if (!values.gender) {
            errors.gender = `Gender can't be empty`;
            setIsError(true);
        }

        return errors;

    }


    //When user cancelled the edit mode then changes revert to initial state
    const handleEditClose = () => {
        setShowEdit(false)
        setEditValues(initialValues);
        setIsError(false)
        
    }

    //this effect will run whenever item date get changed i.e. whenever we save the changes(edit mode/changing data) it will close the edit window.
    useEffect(() => {
        handleEditClose();
    }, [item])



    return (
        <div className='item'>
            <div className='title' onClick={() => toggleAccordion(`${item.id}`)} >
                <div className="info">
                    <img src={item.picture} alt='' />
                    <h4>{item.first} {item.last}</h4>
                </div>
                <span  >
                    {selected.id == `${item.id}` && selected.show ? <RemoveIcon /> : <AddIcon />}
                </span>

            </div>
            <div className={selected.id == `+${item.id}` && selected.show ? 'content-show' : 'content-hidden'}>
                <div className="details">
                    <span className="basic-detail">
                        {showEdit === true ? 'DOB' : 'Age'}
                        {!showEdit && <span>{calculate_age(`${item.dob}`)} Years </span>}
                        {showEdit && (<>
                            <input className='edit' type="date" value={editValues.dob} name='dob'
                                onChange={changeHandler} />


                        </>
                        )}
                        {isError && <p className="error-text">{error.dob}</p>}

                    </span>

                    <span className="basic-detail">
                        Gender
                        {!showEdit && <span>{item.gender}</span>}
                        {showEdit && (
                            <select className='select-options edit' value={editValues.gender} onChange={changeHandler} name='gender'>

                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="transgender">Transgender</option>
                                <option value="not">Rather not say</option>
                                <option value="other">Other</option>


                            </select>
                        )}
                        {isError && <p className="error-text">{error.gender}</p>}

                    </span>
                    <span className="basic-detail">
                        Country
                        {!showEdit && <span>{item.country}</span>}
                        {showEdit && (<><input
                            className='edit'
                            type="text"
                            name='country'
                            value={editValues.country}
                            onChange={changeHandler} />


                        </>)}

                        {isError && <p className="error-text">{error.country}</p>}
                    </span>



                </div>
                <div >
                    <span className='desc-title'>
                        Description
                        {!showEdit && <p className='desc'>{item.description}</p>}
                        {showEdit && (<textarea
                            className='edit-desc' cols="50" rows="6"
                            name='description'
                            value={editValues.description}
                            onChange={changeHandler} />
                        )
                        }

                    </span>
                    {isError && <p className="error-text">{error.description}</p>}


                </div>

                <div className="actions">
                    {!showEdit && (
                        <>
                            <button className="action-button" >
                                <DeleteOutlineOutlinedIcon
                                    style={{ color: 'red', marginRight: '8px', opacity: '0.7' }}
                                    onClick={handleDeleteShow}


                                />
                            </button>
                            <button className="action-button">
                                <ModeEditOutlineOutlinedIcon
                                    style={{ color: 'blue' }}
                                    onClick={handleEditShow}
                                />
                            </button>
                        </>
                    )}

                    {showEdit && (
                        <>
                            <button className='action-button'>
                                <CancelOutlinedIcon
                                    style={{ color: 'red', marginRight: '8px', opacity: '0.9' }}
                                    onClick={handleEditClose}
                                />
                            </button>

                            <button type='submit' className={disabled?'action-button disable-button':'enable-button'} onClick={submitHandler} disabled={disabled}>
                                <CheckCircleOutlineOutlinedIcon 
                                    style={{ color: 'green' }}

                                />
                            </button>
                        </>
                    )}


                </div>
            </div>


            {/* {to popup the delete alert} */}
            {showDelete && <DeleteUser onDeleteClose={handleDeleteClose} onDeleteconfirm={() => deleteUser(item.id)} />}

        </div>
    )
}

export default Users
