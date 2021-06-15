import Layout from '@/components/Layout'
import styles from '@/styles/InvitePage.module.css'
import Button from '@/components/Button'


export default function InvitePage() {
    return (
        <Layout title='Invite'>
            <div className={styles.invite}>
                <h1>registration coming soon!</h1>
                <p>check back in a few days</p>
                <Button text='back to home' link={true} />
            </div>
           
        </Layout>
    )
}
