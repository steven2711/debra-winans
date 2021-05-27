import styles from '@/styles/Blockquote.module.css'


export default function Blockquote({quote}) {
    return (
        <div className={styles.blockquote}>
            <blockquote>{quote}</blockquote>
        </div>
    )
}
