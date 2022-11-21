import { useEffect, useState } from 'react'
import useSWR from 'swr'
import styles from './index.module.css'

export default function Manage() {
    const { data, error } = useSWR('/links')
    const [links, setLinks] = useState<any>()

    useEffect(() => {
        if (!data) return
        setLinks(data.map((link: any) => <div key={link.id}>{JSON.stringify(link)}</div>))
    }, [data, error])

    return (
        <div className={styles.container}>
            <h1>Link Manager</h1>
            {error ? <div>Sorry, I couldn&apos;t get the links</div> : links}
        </div>
    )
}
