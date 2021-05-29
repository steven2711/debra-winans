import Layout from '@/components/Layout'
import styles from '@/styles/AboutPage.module.css'


export default function AboutPage() {
    return (
        <Layout>
            <div className={styles.about}>
                <h1>About page</h1>
                <p>all about debra winans</p>
            </div>
        </Layout>
    )
}
