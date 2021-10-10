import React from 'react'
import styles from './ImgAndName.module.css'

const ImgAndName = ({imgSrc, name, nameClass = false, children = false}) => {
    return (
        <div className={styles.parentDiv}>
            <div className={styles.imgDiv}>
                <img src={imgSrc} alt={name}/>
            </div>
            <div className={`${styles.name} ${nameClass ? nameClass : ''}`}>{children ? children : name}</div>
        </div>
    )
}

export default ImgAndName
