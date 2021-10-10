import React from 'react'
import ImgAndName from '../generic/ImgAndName/ImgAndName'
import Icons from '../Icons'
import styles from './groupContent.module.css'
import Dropdown from 'react-bootstrap/Dropdown'
import {CustomToggle, CustomMenu} from '../generic/DropdownMenu'

const ArticleCard = ({data}) => {
    return (
        <div className={styles.articleCard}>
            <img src={`https://source.unsplash.com/1085x1085/?${data.type}`} alt="landscape"/>
            <div className={styles.articleContent}>
                <div className={styles.articleContent_top}>
                    <span>{data.type}</span>
                </div>
                <div className={styles.articleContent_title}>
                    <div>{data.topic}</div>
                    <Dropdown>
                        <Dropdown.Toggle as={CustomToggle}>
                            <span className={`icon ${styles.three_horizontal_dots}`}><Icons icon="three_horizontal_dots"/></span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu as={CustomMenu}>
                            <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Report</Dropdown.Item>
                            <Dropdown.Item eventKey="1">Delete</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                {data.description && <div className={styles.articleContent_desc}>{data.description}</div>}
                {!data.description && 
                <div className={styles.tinyDetails}>
                    {data.date && 
                        <div>
                            <span className="icon"><Icons icon="calendar"/></span>
                            <span>{data.date}</span>
                        </div>}
                    {data.company && 
                        <div>
                            <span className="icon"><Icons icon="suitcase"/></span>
                            <span>{data.company}</span>
                        </div>}
                    {data.location && 
                        <div>
                            <span className="icon"><Icons icon="location"/></span>
                            <span>{data.location}</span>
                        </div>}
                </div>
                }
                {data.website && <button className={styles.websiteBtn}>Visit Website</button>}
                {data.applyOn && <button className={`${styles.websiteBtn} ${styles.jobBtn}`}>Apply on {data.applyOn}</button>}
                <div className={styles.articleContent_detail}>
                    <ImgAndName imgSrc={data.userImg} name={data.userName}>
                        <div className={styles.articleContent_detail_user}>
                            <span>{data.userName}</span>
                            <div className={styles.articleContent_detail_user_views}>
                                <span className="icon">
                                    <Icons icon="eye_open"/>
                                </span>
                                <span>{data.views} Views</span>
                            </div>
                        </div>
                    </ImgAndName>
                    <div className={styles.articleContent_actions}>
                        <div className={styles.articleContent_actions_views}>
                            <span className="icon">
                                <Icons icon="eye_open"/>
                            </span>
                            <span>{data.views} Views</span>
                        </div>
                        <div>
                            <span className={`icon ${styles.articleContent_shareBtn}`}><Icons icon="share"/></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard
