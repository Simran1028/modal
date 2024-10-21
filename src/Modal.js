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
                    <p><strong>Job Title:</strong> {data.title}</p>
                    <p><strong>Job Description:</strong> {data.description}</p>
                    <p><strong>Experience Level:</strong> {data.level}</p>
                    <p><strong>Email:</strong></p>
                    <ul>
                        {data.emailInput && data.emailInput.length > 0 ? (
                            data.emailInput.map((email) => (
                                <li key={email.id}>{email.title}</li>
                            ))
                        ) : (
                            <li>No emails added</li>
                        )}
                    </ul>
                    <p><strong>End Date:</strong> {data.date}</p>

                    <button onClick={handleClose} aria-label="Close modal">X</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
