import React, {useState} from 'react'
import styles from './registeration.module.css'
import facebookLogo from "./png icons/facebook.png"
import googleLogo from "./png icons/google.png"
import welcomeImg from './png icons/welcome.png'
import Icons from '../Icons'
import { useAppContext } from '../../reducers/App/context'

const Signup = ({switchComp, closeModal}) => {
    const [showPass, setShowPass] = useState(false)
    const {appActions} = useAppContext()

    const handleSignup = () => {
        appActions.loggedIn(true)
        closeModal()
    }
    return (
        <>
        <div className={styles.heading}>
            <h1>Create Account</h1>
            <div className={`${styles.secondDiv_div1} ${styles.secondDiv_switchComp}`}><span>Already have an account?</span><strong onClick={() => switchComp(e => !e)}>Sign In</strong></div>
            <div className={styles.crossIcon} onClick={() => closeModal()}><span className="icon"><Icons icon="cross"/></span></div>
        </div>
        <div className={styles.mainDiv}>
            <div>
                <div className={styles.inputs}>
                    <div className={styles.nameInputDiv}>
                        <input placeholder="First Name" />
                        <input placeholder="Last Name" />
                    </div>
                    <div><input placeholder="Email" /></div>
                    <div className={styles.passwordInp}>
                        <input type={showPass ? 'text' : "password"} placeholder="Password" />
                        <span className="icon" onClick={() => setShowPass(!showPass)}><Icons icon={showPass ? "eye_off" : "eye_open"}/></span>
                    </div>
                    <div><input placeholder="Confirm Password" /></div>
                </div>
                <div className={styles.btnAndSwitchComp}>
                    <button className={styles.btn} onClick={handleSignup}>Create Account</button>
                    <div className={styles.btnAndSwitchComp_switchComp} onClick={() => switchComp(e => !e)}>or, Sign In</div>
                </div>
                <div className={styles.socialBtns}>
                    <button><img src={facebookLogo} alt="facebook" /><span>Sign up with Facebook</span></button>
                    <button><img src={googleLogo} alt="facebook" /><span>Sign up with Google</span></button>
                </div>
                <span className={styles.agreementInfo}>By signing up, you agree to our Terms & conditions, Privacy policy</span>
            </div>
            <div className={styles.secondDiv}>
                <div><img src={welcomeImg} alt="welcome" /></div>
                <span>By signing up, you agree to our Terms & conditions, Privacy policy</span>
            </div>
        </div>
        </>
    )
}

export default Signup
