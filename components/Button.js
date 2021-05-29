import styles from '@/styles/Button.module.css'
import Link from 'next/link'


export default function Button({text, link, path}) {
    return (
        <>
        {link ? <Link href={`${path}`}><a className={styles.button}>{text}</a></Link> : <button className={styles.button}>{text}</button>}
       
        </>
    )
}


Button.defaultProps = {
    link: false,
    path: "/"
}
