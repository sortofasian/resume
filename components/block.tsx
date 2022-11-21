import { ReactNode } from 'react'
import styles from './block.module.css'

type Props = {
    title?: string
    size?: number
    children?: ReactNode
}

function Block({ title, size, children }: Props) {
    return (
        <div className={styles.container} style={{flexGrow: size}}>
            {title && <h2>{title}</h2>}
            {children}
        </div>
    )
}

export default Block
