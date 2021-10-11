import React from 'react'
import Icons from '../Icons'
import styles from './navbar.module.css'
import {useAppContext} from '../../reducers/App/context'
import ImgAndName from '../generic/ImgAndName/ImgAndName'
import profilePic from './profilePic.png'
import Dropdown from '../generic/dropdown/Dropdown'

const Navbar = () => {
    const {appActions, appState} = useAppContext()
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_div1}><Icons icon="logo"/></div>
            <div className={styles.secondSection}>
                <div></div>
                <div className={styles.navbar_div2}>
                    <div className={styles.searchDiv}>
                        <span><Icons icon="search"/></span>
                        <input placeholder="Search for your favorite groups in ATG"/>
                    </div>
                </div>
                <div className={styles.navbar_div3}>
                    {appState.loggedIn ? 
                        <Dropdown>
                            <Dropdown.Button>
                                <div className={styles.userProfile}><ImgAndName imgSrc={profilePic} name="Sarthak Kamra"/></div>
                            </Dropdown.Button>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={()=> appActions.loggedIn(false)}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    :
                    <>
                    <span onClick={() => appActions.openModal(true)}>Create account.</span>
                    <strong>It’s free!</strong>
                    </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
