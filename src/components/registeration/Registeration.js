import React, { useState } from 'react'
import styles from './registeration.module.css'
import Modal from '../generic/hoc/modal/Modal'
import Signup from './Signup'
import Signin from './Signin'

const Registeration = ({ closeModal }) => {
    const [showSigninComp, setShowSigninComp] = useState(false)
    return (
        <div className={styles.parentDiv}>
            <div className={styles.topDiv}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</div>
            <div className={styles.container}>
                {showSigninComp ? <Signin switchComp={setShowSigninComp} closeModal={closeModal}/> : <Signup switchComp={setShowSigninComp} closeModal={closeModal}/>}
            </div>
        </div>
    )
}

export default Modal(Registeration)
