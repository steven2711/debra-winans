import styles from '@/styles/BookDisplay.module.css'
import Image from 'next/image'
import Slider from '@/components/Slider'
import Button from '@/components/Button'
import { loadStripe } from '@stripe/stripe-js';
import {useState} from 'react'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


export default function BookDisplay() {

    const [loading, setLoading] = useState(false)


    const handleClick = async () => {
        // Get Stripe.js instance

        setLoading(true)

        const stripe = await stripePromise;
    
        // Call your backend to create the Checkout Session
        const response = await fetch('/api/checkout/session', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({quantity: 1})

        });
    
        const session = await response.json();

        console.log(session)
    
        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
          sessionId: session.sessionId
        });
    
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
          console.log(result.error)
        } else {
            setLoading(false)
        }
      };





    return (
        <section className={styles.bookDisplay}>
            
            <div className={styles.image}>
                <Image src="/images/book-cover.jpg" width={500} height={650} priority={true}/>
            </div>
            <div className={styles.info}>
                <h2>"Life, Altered Not Over" on sale now!</h2>
                <Slider />
               {/* <Button text="order book" handler={handleClick} isLoading={loading}/> */}
               <a href='https://checkout.square.site/merchant/9A69W7TFSWGMD/checkout/FRLZJ2KZPN7HDJU52IPOAQGX'>Order Now</a>
            </div>
           
        </section>
    )
}
