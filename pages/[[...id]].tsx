import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './index.module.css'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Block from '../components/block'
import skills from '../info/skills'
import experiences from '../info/experience'

export default function Home() {
    const { id } = useRouter().query
    useEffect(() => {
        if (id) {
            Array.isArray(id) ? fetch(`/api/links/view/${id[0]}`) : fetch(`/api/links/view/${id}`)
        }
    }, [id])



    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div className={styles.info}>
                    <h1 className={styles.name}>Charles Syvertsen</h1>
                    <h2 className={styles.position}>Full Stack Dev</h2>
                </div>

                <div className={styles.contact}>
                    <h3>1013 Fairway Drive, Chesapeake VA 23320</h3>
                    <h3>charliesyvertsen06@icloud.com</h3>
                    <h3>(757) 749 0014</h3>
                    <h3>
                        <a href="https://github.com/sortofasian">GitHub: sortofasian</a>
                    </h3>
                </div>
            </div>
            <div className={styles.columns}>
                <Block title="Experience" size={3}>
                    <ul className={styles.list}>
                        {experiences.map((experience, i) => (
                            <li key={i}>
                                <div className={styles.xp}>
                                    <h4>{experience.name}</h4>
                                    <div>
                                        <h4>{experience.type}</h4>
                                        <h4>{experience.date}</h4>
                                    </div>
                                </div>

                                {experience.desc.map((item, i) => {
                                    if (!Array.isArray(item)) return <p key={i}>{item}</p>
                                    return (
                                        <ul className={styles.sublist} key={i}>
                                            {item.map((listitem, i) => (
                                                <li key={i}>{listitem}</li>
                                            ))}
                                        </ul>
                                    )
                                })}
                            </li>
                        ))}
                    </ul>
                </Block>
                <div className={styles.rows} style={{ flexGrow: 1 }}>
                    <Block title="Skills">
                        <div className={styles.skillicons}>
                            {skills.map((skill) => {
                                return (
                                    <div key={skill.name}>
                                        <FontAwesomeIcon icon={skill.icon} color={skill.color} style={skill.styleOverride} />
                                        <p>{skill.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </Block>

                    <Block title="Education">
                        <h3>Governor&apos;s STEM Academy</h3>
                        <h3>2019-2023</h3>
                        <p>Grassfield High School</p>
                        <br />

                        <h3>Online Courses</h3>
                        <h3>2019-2022</h3>
                        <p>
                            <a href="https://udemy.com">udemy.com</a>,{' '}
                            <a href="https://egghead.io">egghead.io</a>,{' '}
                            <a href="https://youtube.com">youtube.com</a>, & various articles
                        </p>
                    </Block>
                </div>
            </div>
        </div>
    )
}
