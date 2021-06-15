import Layout from '@/components/Layout'
import styles from '@/styles/EventPage.module.css'
import { slugify } from '../../helpers'
import Button from '@/components/Button'
import Image from 'next/image' 


export default function SingleEventPage({event: {imagePath, title, startDate, endDate, time, days, price, purchasePath, excerpt}}) {


    return (

        <Layout title={title}>
            <div className={styles.container}>
                <div className={styles.imageBox}>
                    <img src={`${imagePath}`} alt={title} className={styles.image} />
                </div>

                <div className={styles.info}>
                    <h1>{title}</h1>
                    <h2>{startDate}{`- ${endDate ? endDate : null}`}</h2>
                    <h2>{time}</h2>
                    <h2>{days ? `on ${days}` : null}</h2>
                    <p>{excerpt}</p>

                    <div className={styles.pricing}>
                        <div>
                            <span>{price}</span>
                            <Button text='purchase class' link={true} path={purchasePath} />
                        </div>
                        <p>**choose this option if you already have a copy of 'Life Altered, Not Over'**</p>

                        <div>
                            <span>$64</span>
                            <Button text='buy class and book' link={true} path='https://checkout.square.site/merchant/MLH6RXNFN7NQ5/checkout/KONGE2FKCSIN5OCHWEZERYIE' />
                        </div>
                        <p>**choose this option if you DO NOT have a copy of 'Life Altered, Not Over.' You must have a book for entry**</p>
                        
                        
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export async function getStaticPaths() {

    const {events} = (await import('../../data/events'))

    
    const slugs = events.map(event => slugify(event.title))
    const paths = slugs.map(slug => ({params: {slug}}))


    return {
      paths,
      fallback: false // See the "fallback" section below
    };
  }



export async function getStaticProps({params:{slug}}) {


    const {events} = (await import('../../data/events'))
    const event = events.filter(event => slugify(event.title) === slug)

    if (!event) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { event: event[0] }, // will be passed to the page component as props
    }
  }

