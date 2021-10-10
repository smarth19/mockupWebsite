import React from 'react'
import styles from './groupHeader.module.css'

const GroupHeader = () => {
    return (
        <div className={styles.groupHeader}>
            <img src={`https://source.unsplash.com/${window.screen.width}x440/?computer`} alt="computer engineering"/>
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


