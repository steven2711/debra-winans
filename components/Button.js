import styles from '@/styles/Button.module.css'
import Link from 'next/link'
import { FaRegLaugh } from 'react-icons/fa';



export default function Button({text, link, path, handler, isLoading, btnDark}) {
    return (
        <>
        {link ? <Link href={`${path}`}><button className={btnDark ? styles.buttonDark : styles.button}>{text}</button></Link> : <button className={btnDark ? styles.buttonDark : styles.button} onClick={handler ? handler : null}>{isLoading ? <FaRegLaugh className={styles.btnIcon}/>: null}{text}</button>}
       
        </>
    )
}


Button.defaultProps = {
    link: false,
    path: "/",
    isLoading: false,
    btnDark: false,
    handler: null
}
