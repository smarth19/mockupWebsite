import React from 'react'
import styles from './groupHeader.module.css'
import groupHeaderImg from './groupHeader.png'

const GroupHeader = () => {
    return (
        <div className={styles.groupHeader}>
            <img src={groupHeaderImg} alt="computer engineering"/>
            <div>
                <div >
                    <div className={styles.heading}>Computer Engineering</div>
                    <div className={styles.info}>142,765 Computer Engineers follow this</div>
                </div>
            </div>
        </div>
    )
}

export default GroupHeader


