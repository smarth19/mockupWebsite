import React from 'react'
import Icons from '../Icons'
import ArticleCard from './ArticleCard'
import styles from './groupContent.module.css'
import {useAppContext} from '../../reducers/App/context'
import ImgAndName from '../generic/ImgAndName/ImgAndName'
// import Dropdown from 'react-bootstrap/Dropdown'
// import {CustomToggle, CustomMenu} from '../generic/DropdownMenu'
import Dropdown from '../generic/dropdown/Dropdown'

import img_sarthak from './img/user/sarthak.png'
import img_sarah from './img/user/sarah.png'
import img_ronal from './img/user/ronal.png'
import img_joseph from './img/user/joseph.png'

import articleImg_article from './img/articles/article.png'
import articleImg_education from './img/articles/education.png'
import articleImg_meetup from './img/articles/meetup.png'

import grpImg_leisure from './img/group photos/leisure.png'
import grpImg_activism from './img/group photos/activism.png'
import grpImg_mba from './img/group photos/mba.png'
import grpImg_philosophy from './img/group photos/philosophy.png'

const articles = [
    {
        id: 1,
        articleImg: articleImg_article,
        type: '✍️ Article',
        topic: 'What if famous brands had regular fonts? Meet RegulaBrands!',
        description: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
        userImg: img_sarthak,
        userName: 'Sarthak Kamra',
        views: '1.4k',
    },
    {
        id: 2,
        articleImg: articleImg_education,
        type: '🔬️ Education',
        topic: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
        description: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
        userImg: img_sarah,
        userName: 'Sarah West',
        views: '6.6k',
    },
    {
        id: 3,
        articleImg: articleImg_meetup,
        type: '🗓️ Meetup',
        topic: 'Finance & Investment Elite Social Mixer @Lujiazui',
        date: "Fri, 12 Oct, 2018",
        location: "Ahmedabad, India",
        userImg: img_ronal,
        userName: 'Ronal Jones',
        website: "xyz",
        views: '600',
    },
    {
        id: 4,
        type: '💼️ Job',
        topic: 'Software Developer',
        company: "Innovaccer Analytics Private Ltd.",
        location: "Noida, India",
        userImg: img_joseph,
        userName: 'Joseph Gray',
        views: '4.9k',
        applyOn: 'Timesjobs'
    },
]

const GroupContent = () => {
    const {appState, appActions} = useAppContext()
    return (
        <div className={styles.container}>
            <div className={styles.topSection}>
                <div className={styles.tabSection}>
                    <span className={styles.activeTab}>All Posts(32)</span>
                    <span>Article</span>
                    <span>Event</span>
                    <span>Education</span>
                    <span>Job</span>
                </div>
                <span className={styles.backArrow}><Icons icon="back"/></span>
                <div className={styles.actionBtns}>
                    <div>
                        <div className={`${styles.filterBtn} ${styles.actionBtns_btns}`}>   
                            <Dropdown>
                                <Dropdown.Button>
                                    <div style={{display:'flex'}}>
                                        <span>Filter: All</span>
                                        <span className="icon"><Icons icon="down_filled"/></span>
                                    </div>
                                </Dropdown.Button>
                                <Dropdown.Menu style={{left: "-60px"}}>
                                    <Dropdown.Item>Article</Dropdown.Item>
                                    <Dropdown.Item>Event</Dropdown.Item>
                                    <Dropdown.Item>Education</Dropdown.Item>
                                    <Dropdown.Item>Job</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div>
                        <div className={`${styles.writePost} ${styles.actionBtns_btns}`} onClick={!appState.loggedIn ? () => appActions.openModal(true) : undefined}>
                            <span className="icon"><Icons icon="pen"/></span>
                            <span>Write a Post</span>
                        </div>
                    </div>
                    {appState.loggedIn 
                    ?
                    <div>
                        <div className={`${styles.exitGrp} ${styles.actionBtns_btns}`}>
                            <span className="icon"><Icons icon="exit"/></span>
                            <span>Leave Group</span>
                        </div>
                    </div>
                    : 
                    <div>
                        <div className={`${styles.joinGrp} ${styles.actionBtns_btns}`} onClick={() => appActions.openModal(true)}>
                            <span className="icon"><Icons icon="group"/></span>
                            <span>Join Group</span>
                        </div>
                    </div>
                    }
                </div>
            </div>
            <div className={styles.mainSection}>
                <div className={styles.articlesSection}>
                    {articles.map(e => <ArticleCard key={e.id} data={e}/>)}
                </div>
                <div className={styles.mainSection_rightSide}>
                    <div className={styles.enterLocationDiv}>
                        <span className="icon"><Icons icon="location"/></span>
                        <div><input placeholder="Enter your location"/></div>
                    </div>
                    <div className={styles.infoDiv}>
                        <span className="icon"><Icons icon="info"/></span>
                        <div>Your location will help us serve better and extend a personalised experience.</div>
                    </div>
                    {appState.loggedIn && 
                        <div className={styles.recommendedDiv}>
                            <div className={styles.recommendedDiv_div1}><span><Icons icon="like"/></span><span>RECOMMENDED GROUPS</span></div>
                            <div>
                                <Group imgSrc={grpImg_leisure} name="Leisure" followed={true}/>
                                <Group imgSrc={grpImg_activism} name="Activism" followed={false}/>
                                <Group imgSrc={grpImg_mba} name="MBA" followed={false}/>
                                <Group imgSrc={grpImg_philosophy} name="Philosophy" followed={false}/>
                            </div>
                            <div className={styles.recommendedDiv_div3}><span>See More...</span></div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

const Group = ({imgSrc, name, followed}) => {
    return (
        <div className={styles.followGrp}>
            <ImgAndName imgSrc={imgSrc} name={name}/>
            <div className={`${styles.followBtn} ${followed ? styles.grp_followed : ''}`}><button>{followed ? "Followed" : 'Follow'}</button></div>
        </div>
    )
}

export default GroupContent
