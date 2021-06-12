import styles from '@/styles/Button.module.css'
import Link from 'next/link'


export default function Button({text, link, path, handler}) {
    return (
        <>
        {link ? <Link href={`${path}`}><a className={styles.button}>{text}</a></Link> : <button className={styles.button} onClick={handler ? handler : null}>{text}</button>}
       
        </>
    )
}


Button.defaultProps = {
    link: false,
    path: "/"
}
