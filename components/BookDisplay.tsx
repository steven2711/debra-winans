import styles from '@/styles/BookDisplay.module.css'
import Image from 'next/image'
import Button from '@/components/Button'
import { loadStripe } from '@stripe/stripe-js';
import {useState} from 'react'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


export default function BookDisplay({display}) {

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
                <div>
                    <h1>Life, Altered Not Over!</h1>
                    <h2>My Silent Journey to Wholeness</h2>
                </div>

                <div>
                    <p>
                    Nothing can inspire us more than a human story with which we can all relate; a story that encourages us to believe in our own dreams and to have faith in the promises of God who sometimes seems far away. Life Altered Not Over! addresses the reality of pain and provides  essential tool for hurting individuals. People in any type of emotional, mental and spiritual pain are looking for “how-to-get-healed tools. This life changing book provides just that; how to be healed, be free, be whole and to live your best life! Order now to receive an autographed copy!
                    </p>
                    <p>
                        **Note** Amazon orders are not autographed.
                    </p>
                </div>

                <div className={styles.btns}>
                    <Button text="order now" link={true} path='https://checkout.square.site/merchant/MLH6RXNFN7NQ5/checkout/JQS4HKDONCUF26QAPOTTIUES' />
                    {display ? <Button text='order on amazon' link={true} path='https://www.amazon.com/LIFE-ALTERED-NOT-OVER-Wholeness/dp/1953443001/ref=sr_1_6?dchild=1&keywords=life+altered+not+over+book&qid=1623702537&sr=8-6' /> : <Button text="reflections" link={true} path='/life-altered-not-over' btnDark={true}/>}
                </div>
            </div>
           
        </section>
    )
}


BookDisplay.defaultProps = {
    display: false
}
