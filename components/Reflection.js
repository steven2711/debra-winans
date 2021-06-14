import styles from '@/styles/Reflection.module.css'

export default function Reflection({reflection: {text, name, church, location}}) {
    return (
        <div className={styles.container}>
            <blockquote>
                <p>
                    {text}
                </p>
            </blockquote>
            <cite><span>{name}</span><br/>
            {church} <br/>
            {location}
            </cite>
        </div>
    )
}
