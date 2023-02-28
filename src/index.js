import React from 'react'

export const Modal = ({ isOpen, setIsOpen, autoClose, text }) => {

    const classValidateForm = isOpen ? "validateForm validateForm_actif" : "validateForm validateForm_nonactif"

    const onClick = () => {
        setIsOpen(false)
    }

    if (isOpen && autoClose) {
        setTimeout(() => {
            setIsOpen(false);
        }, 5000);
    }

    //Style: 
    

    return (
        <div className={classValidateForm}>
            <div className="validateForm_v">
                <i className='fas fa-check-circle'></i>
            </div>
            <div className="validateForm_info">
                <p>{text}</p>
                <button onClick={onClick} className="validateForm_info_close"><i className="material-icons">close</i></button>
            </div>
        </div>
    )
}

export default Modal