import React from 'react'
import { useRef } from "react"

/**
 * Modal component, this allows you to display a modal in a different way. See the documentation for more information.
 * @returns Modal
 */
export const Modal = ({ isOpen, setIsOpen, autoClose, text, isNotification, typeNotification, corpsHtml }) => {

    const modal = useRef(null);

    /**
     * Closed the modal when it is a notification
     */
    const onClickCloseNotif = () => {
        setTimeout(() => {
            setIsOpen(false)
        }, 800)
        modal.current.style.right = "-550px"
    }

    /**
     * Closed the modal when it is classic
     */
    const onClickClose = () => {
        setIsOpen(false)
    }

    /**
     * If the component is "autoClose" triggers the automatic closing
     */
    if (isOpen && autoClose && isNotification) {
        setTimeout(() => {
            modal.current.style.right = "-550px"

        }, 5000);
        setTimeout(() => {
            setIsOpen(false)
        }, 5800);
    } else if (isOpen && autoClose && !isNotification) {
        setTimeout(() => {
            setIsOpen(false)
        }, 5000);
    }

    /**
     * Changes the icon based on the notification.
     * @returns a icone
     */
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

    /**
     * Changes the background color depending on the type of notification.
     * @returns a color
     */
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

    //Different styles
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

    const styleModalClassique = {
        display: "flex",
        position: "relative",
        zIndex: 10,
        backgroundColor: "#f9f9f9",
        width: "calc(50% - 32px)",
        maxWidth: "calc(50% - 32px)",
        borderRadius: "10px",
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.06)",
        padding: "32px 16px 32px 16px",
    }

    const styleConteiner = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        zIndex: 3,
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
    ) : (
        <div style={isOpen ? styleConteiner : styleIsClose} ref={modal}>
            <section style={styleModalClassique}>
                {corpsHtml}
                <button onClick={onClickClose} className="validateForm_info_close" style={styleClose}><i className="material-icons" style={{ color: "#011638" }}>close</i></button>
            </section>
        </div>
    )
}

export default Modal