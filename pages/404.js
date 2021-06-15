import Layout from '@/components/Layout'
import styles from '@/styles/PageNotFound.module.css'
import Button from '@/components/Button'

export default function PageNotFound() {
    return (
        <Layout title='404 Page Not Found'>
            <div className={styles.container}>
                <h1>Oops...</h1>
                <p>The page you are looking for does not exist.</p>
                <Button text='back to home' link={true} />
            </div>
        </Layout>
    )
}
