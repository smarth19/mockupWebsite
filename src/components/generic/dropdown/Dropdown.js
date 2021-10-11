import React, { useState, useRef } from 'react'
import styles from './dropdown.module.css'
import dropdownContext, {useDropdownContext} from '../../../context/dropdown'

const Dropdown = ({children}) => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <dropdownContext.Provider value={{showMenu, handleShow: setShowMenu}}>
            <div style={{position:'relative', userSelect: 'none'}}>{children}</div>
        </dropdownContext.Provider>
    )
}

const Button = ({children}) => {
    const {handleShow} = useDropdownContext()
    return <div style={{userSelect: 'none'}} onClick={() => handleShow(e => !e)}>{children}</div>
}

const Menu = ({children, style}) => {
    const menuRef = useRef()
    const {showMenu} = useDropdownContext()
    
    return <ul ref={menuRef} style={style} className={showMenu ? styles.showMenu : {}}>{children}</ul>
}

const Item = ({children, onClick}) => <li onClick={onClick}>{children}</li>

Dropdown.Button = Button
Dropdown.Menu = Menu
Dropdown.Item = Item

export default Dropdown
