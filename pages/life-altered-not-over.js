import Layout from '@/components/Layout'
import styles from '@/styles/BookPage.module.css'
import {reviews} from '../data/reviews'
import Reflection from '@/components/Reflection'
import Image from 'next/image'
import Button from '@/components/Button'
import BookDisplay from '@/components/BookDisplay'


export default function LifeAlteredNotOverPage() {
    return (
        <Layout title='Reflections'>
            <div className={styles.display}>
            <BookDisplay display={true} />
            </div>
            <div className={styles.container}>
              <h2>reflections</h2>
                <div className={styles.reviews}>
                {reviews.map(review => <Reflection key={review.id} reflection={review}/>)}
                </div>
            </div>
        </Layout>
    )
}
