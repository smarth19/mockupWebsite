import React, {useState} from 'react'
import styles from './registeration.module.css'
import facebookLogo from "./png icons/facebook.png"
import googleLogo from "./png icons/google.png"
import welcomeImg from './png icons/welcome.png'
import Icons from '../Icons'
import { useAppContext } from '../../reducers/App/context'

const Signin = ({switchComp, closeModal}) => {
    const [showPass, setShowPass] = useState(false)
    const {appActions} = useAppContext()

    const handleSignin = () => {
        appActions.loggedIn(true)
        closeModal()
    }
    return (
        <>
        <div className={styles.heading}>
            <h1>Sign In</h1>
            <div className={`${styles.secondDiv_div1} ${styles.secondDiv_switchComp}`}><span>Don’t have an account yet</span><strong onClick={() => switchComp(e => !e)}>Create new for free!</strong></div>
            <div className={styles.crossIcon} onClick={() => closeModal()}><span className="icon"><Icons icon="cross"/></span></div>
        </div>
        <div className={styles.mainDiv}>
            <div>
                <div className={styles.signinInputs_parentDiv}>
                    <div className={styles.inputs}>
                        <div><input placeholder="Email" /></div>
                        <div className={styles.passwordInp}>
                            <input type={showPass ? 'text' : "password"} placeholder="Password" />
                            <span className="icon" onClick={() => setShowPass(!showPass)}><Icons icon={showPass ? "eye_off" : "eye_open"}/></span>
                        </div>
                    </div>
                    <div className={styles.btnAndSwitchComp}>
                    <button className={styles.btn} onClick={handleSignin}>Sign In</button>
                        <div className={styles.btnAndSwitchComp_switchComp} onClick={() => switchComp(e => !e)}>or, Create Account</div>
                    </div>
                </div>
                <div>
                    <div className={styles.socialBtns}>
                        <button><img src={facebookLogo} alt="facebook" /><span>Sign up with Facebook</span></button>
                        <button><img src={googleLogo} alt="facebook" /><span>Sign up with Google</span></button>
                    </div>
                    <div className={styles.frgtPass}><span>Forgot Password?</span></div>
                </div>
            </div>
            <div className={styles.secondDiv}>
                <div><img src={welcomeImg} alt="welcome" /></div>
            </div>
        </div>
        </>
    )
}

export default Signin
