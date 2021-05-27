import styles from '@/styles/BookDisplay.module.css'
import Image from 'next/image'
import Slider from '@/components/Slider'


export default function BookDisplay() {
    return (
        <section className={styles.bookDisplay}>
            
            <div className={styles.image}>
                <Image src="/images/book-cover.jpg" width={500} height={650}/>
            </div>
            <div className={styles.info}>
                <h2>"Life, Altered Not Over" on sale now!</h2>
                <Slider />
            </div>

        </section>
    )
}
