import styles from '@/styles/EventBanner.module.css'
import {events} from '../data/events'
import EventCard from './EventCard'
import Button from './Button'




export default function EventBanner() {
    return (
        <section className={styles.banner}>
            <h2>upcoming events</h2>
            <div className={styles.eventBox}>
                {events.slice(0,3).map(event => <EventCard key={event.id} event={event} />)}
            </div>
            <div className={styles.moreBtn}>
           {events.length > 3 ? <Button text='more events' link={true} path='/events' /> : null}
           </div>
        </section>
    )
}