import React from 'react'
import Icons from '../Icons'
import styles from './navbar.module.css'
import {useAppContext} from '../../reducers/App/context'
import ImgAndName from '../generic/ImgAndName/ImgAndName'
import Dropdown from 'react-bootstrap/Dropdown'
import {CustomToggle, CustomMenu} from '../generic/DropdownMenu'

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
                            <Dropdown.Toggle as={CustomToggle}>
                                <div className={styles.userProfile}><ImgAndName imgSrc='https://source.unsplash.com/48x48/?musk' name="Sarthak Kamra"/></div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu as={CustomMenu}>
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
