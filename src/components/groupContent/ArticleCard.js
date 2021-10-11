import React from 'react'
import ImgAndName from '../generic/ImgAndName/ImgAndName'
import Icons from '../Icons'
import styles from './groupContent.module.css'
import Dropdown from '../generic/dropdown/Dropdown'

const ArticleCard = ({data}) => {
    return (
        <div className={styles.articleCard}>
            {data.articleImg && <img src={data.articleImg} alt={data.topic}/>}
            <div className={styles.articleContent}>
                <div className={styles.articleContent_top}>
                    <span>{data.type}</span>
                </div>
                <div className={styles.articleContent_title}>
                    <div>{data.topic}</div>
                    <Dropdown>
                        <Dropdown.Button>
                            <span className={`icon ${styles.three_horizontal_dots}`}><Icons icon="three_horizontal_dots"/></span>
                        </Dropdown.Button>
                        <Dropdown.Menu style={{left: "-65px"}}>
                            <Dropdown.Item>Edit</Dropdown.Item>
                            <Dropdown.Item>Report</Dropdown.Item>
                            <Dropdown.Item>Delete</Dropdown.Item>
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
