import Layout from '@/components/Layout'
import Link from 'next/link'
import styles from '@/styles/Success.module.css'
import Button from '@/components/Button'




export default function SuccessPage() {
    return (
        <Layout>
            <div className={styles.success}>
                <h1>thank you for your purchase!</h1>
                <p>your receipt has been sent to the email address you provided</p>
                <Button link={true} text='continue' />
            </div>
        </Layout>
    )
}
