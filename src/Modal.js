import React from 'react'
import './Modal.css'

const Modal = ({ show, handleClose, data = {} }) => {


    if (!show) {
        return null;

    }

    return (
        <div>
            <div className='modal-layout'>
                <div className='modal'>
                    <div className='info'>
                        <h5>Following details submitted:</h5>
                        <button onClick={handleClose} aria-label="Close modal">X</button>
                    </div>
                    <p><strong>Job Title:</strong> {data.title}</p>
                    <p><strong>Job Description:</strong> {data.description}</p>
                    <p><strong>Experience Level:</strong> {data.level}</p>
                    <p><strong>Email:</strong></p>
                    <ul>
                       {
                            data.emailInput.map((email) => (
                                <li key={email.id}>{email.title}</li>
                            ))
                        }
                    </ul>
                    <p><strong>End Date:</strong> {data.date}</p>

                    
                </div>
            </div>
        </div>
    )
}

export default Modal
