import React from 'react'
import { useRef } from "react"

export const Modal = ({ isOpen, autoClose, text, isNotification, typeNotification }) => {

    const modal = useRef(null);

    const onClickCloseNotif = () => {
        setTimeout(() => {
            modal.current.style.display = 'none'
        }, 800)
        modal.current.style.right = "-550px"
    }

    const onClickClose = () => {
        modal.current.style.display = 'none'
    }

    if (isOpen && autoClose && isNotification) {
        setTimeout(() => {
            modal.current.style.right = "-550px"
        }, 5000);
    }

    const iconsAlerte = () => {
        switch (typeNotification) {
            case "validate":
                return <i className='fas fa-check-circle' style={{ color: "#f9f9f9", fontSize: "28px" }} ></i>
            case "alert":
                return <i className='fas fa-exclamation-circle' style={{ color: "#f9f9f9", fontSize: "28px" }}></i>
            case "error":
                return <i className='fas fa-times-circle' style={{ color: "#f9f9f9", fontSize: "28px" }}></i>
            default:
                return <i className='fas fa-circle' style={{ color: "#f9f9f9", fontSize: "28px" }}></i>
        }
    }

    const color = () => {
        switch (typeNotification) {
            case "validate":
                return "#729b79"
            case "alert":
                return "#B09D58"
            case "error":
                return "#B75D69"
            default:
                return "#747578"
        }
    }

    const styleIsClose = {
        display: 'none',
    }

    const styleValidateFormActif = {
        display: "flex",
        alignItems: "center",
        gap: "16px",
        width: "320px",
        height: "84px",
        overflow: "hidden",
        position: "absolute",
        top: "20px",
        right: "20px",
        transition: "ease-in-out 0.8s",
        backgroundColor: "#f9f9f9",
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.06)",
        borderRadius: "10px"
    }

    const styleValidateForm_v = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "25%",
        height: "100px",
        backgroundColor: color(),
        borderRadius: "10px 0px 0px 10px",
        zIndex: "1"
    }

    const styleValidateForm_info = {
        position: "relative",
        backgroundColor: "#f9f9f9",
        display: "flex",
        alignItems: "center",
        paddingRight: "16px",
        height: "100%",
        zIndex: "3",
        width: "calc(75% - 16px)"
    }

    const styleClose = {
        position: "absolute",
        backgroundColor: "transparent",
        border: "none",
        right: "8px",
        top: "8px"
    }

    const styleModal = {
        position: "relative",
        zIndex: 10,
        backgroundColor: "#f9f9f9",
        width: "calc(50% - 32px)",
        maxWidth: "calc(50% - 32px)",
        borderRadius: "10px",
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.06)",
        padding: "32px 16px 32px 16px",
    }


    return isNotification ? (
        <div className={"validateForm"} style={isOpen ? styleValidateFormActif : styleIsClose} ref={modal}>
            <div className="validateForm_v" style={styleValidateForm_v}>
                {iconsAlerte()}
            </div>
            <div className="validateForm_info" style={styleValidateForm_info}>
                <p>{text}</p>
                <button onClick={onClickCloseNotif} className="validateForm_info_close" style={styleClose}><i className="material-icons" style={{ color: "#011638" }}>close</i></button>
            </div>
        </div>
    )
        :
        (
            <div style={styleModal} ref={modal}>
                <p>{text}</p>
                <button onClick={onClickClose} className="validateForm_info_close" style={styleClose}><i className="material-icons" style={{ color: "#011638" }}>close</i></button>
            </div>
        )

}

export default Modal