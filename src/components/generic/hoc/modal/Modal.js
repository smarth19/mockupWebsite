import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../../../reducers/App/context'
import Icons from '../../../Icons'
import styles from './modal.module.css'

const Modal = Children => {
    const Component = props => {
        const {appState, appActions} = useAppContext()
        const [closeModal, setCloseModal] = useState(false)

        useEffect(() => {
            if(appState.openModal ===  false) setCloseModal(true)
        }, [appState.openModal])
        
        const animationEndFunction = e => {
            if(e.animationName === 'fadeOut'){
                setCloseModal(false)
                appActions.openModal(false)
            }  
        }

        const handleClose = () => setCloseModal(true)
        

        return(
            <div className={`${styles.parentDiv} fadeIn ${closeModal ? 'fadeOut' : ''}`} onAnimationEnd={animationEndFunction}>
                <div>
                    <div className={styles.crossBtnDiv}><span className="icon" onClick={handleClose}><Icons icon="cross"/></span></div>
                    <Children {...props} closeModal={handleClose}/>
                </div>
            </div>
        )

    }
    return Component
}

export default Modal
