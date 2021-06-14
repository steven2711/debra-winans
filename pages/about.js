import Layout from '@/components/Layout'
import styles from '@/styles/AboutPage.module.css'
import Image from 'next/image'
import Link from 'next/link'



export default function AboutPage() {
    return (
        <Layout title='About Dr.Debra D. Winans'>
            <div className={styles.container}>
                <h1>About</h1>
                <div className={styles.about}>
                
                    <div className={styles.imageBox}>
                        <Image src='/images/showcase-2.jpg' width={500} height={600} alt='Dr. Debra D. Winans' priority={true} className={styles.image}/>
                        
                    </div>

                    <div className={styles.text}>
                    <p><strong>Dr. Debra D. Winans</strong> is the CEO of Linking Solutions, a Marketplace Network Company that makes divine connections in business and ministries. Debra earned her Bachelor of Science in (ORCO) Organization and Communications with a minor in Women and Gender Studies at Middle Tennessee State University, as well as served on the President’s Commission for Women at the same institution. She also holds an Honorary Doctor of Philosophy from Indian Bible College, and has earned numerous certificate’s for teaching, training and counseling in Sexual Assault Advocacy Training.</p>

                    <p>With more than two decades of experiencing helping building and leading organizations, both religious and secular arenas, Debra has an uncanny ability to refine business operations and reconnect them to their original mission and goals; to drive the company’s production capacity and profitability. Ms. Winans brilliantly identifies the crucial areas that need to be reconstructed to revitalize the leadership and to promote vitality and growth in deprived areas.</p>

                    <p>Debra is the author of two books: <Link href='/life-altered-not-over'><a>Life Altered, Not Over</a></Link>, which deals with the recovery and life process after divorce and <em>The Invitation</em>, Thomas Nelson’s first women’s devotions collaborated with 50 women around the world. It is her passion to see men and women walk in their purpose despite the tragic circumstances in their lives, to be whole in every area of life in a place of freedom, peace and the pursuit of purpose.
                    Debra’s undying motto is:</p>
                    
                    <div className={styles.quote}>
                    <blockquote>“I was not married into a purpose; I was created with purpose!”</blockquote>
                    <span>-Dr. Debra D. Winans</span>
                    </div>

                    <p>Debra has two amazing children, Miya Destiny and Benjamin David, the loves of her life.</p>

                    
                    </div>
                </div>
                
            </div>
        </Layout>
    )
}
