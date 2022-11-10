import styles from './header.module.css'

const NAME = 'Charles Syvertsen'
const POSITION = 'Full Stack Dev'

export function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.info}>
                <h1 className={styles.name}>{NAME}</h1>
                <h2 className={styles.position}>{POSITION}</h2>
            </div>

            <div className={styles.contact}>
                <h3>1013 Fairway Drive, Chesapeake VA 23320</h3>
                <h3>charliesyvertsen06@icloud.com</h3>
                <h3>(757) 749 0014</h3>
                <h3>
                    <a href='https://github.com/sortofasian'>
                        GitHub: sortofasian
                    </a>
                </h3>
            </div>
        </div>
    )
}
