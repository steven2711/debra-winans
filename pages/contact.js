import Layout from '@/components/Layout'
import styles from '@/styles/ContactPage.module.css'
import {useState} from 'react'
import Button from '@/components/Button'


export default function ContactPage() {


    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        phone: null,
        message: ''
    })


    const handleChange = (e) => {
        setContactInfo(...contactInfo, {[e.target.name]: e.target.value})
    }




    return (
        <Layout>
            <div className={styles.contact}>
            <h1>get in touch</h1>
            <form>
                <div className={styles.infoSection}>
                    <div className={styles.info}>
                        <div className="form-group">
                            <label for="name">
                                name<span className="asterisks">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                aria-describedby="enter name"
                                placeholder="Name"
                                name="name"
                                value={contactInfo.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label for="email">
                                email address<span className="asterisks">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                aria-describedby="enter email"
                                placeholder="Email"
                                name="email"
                                value={contactInfo.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label for="phone">
                                phone number<span className="asterisks">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                aria-describedby="enter phone number"
                                placeholder="Phone"
                                name="phone"
                                value={contactInfo.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className={styles.message}>
                        <div className="form-group">
                            <label for="message">
                                message<span className="asterisks">*</span>
                            </label>
                            <textarea
                                className="form-control"
                                id="message"
                                rows="4"
                                name="message"
                                value={contactInfo.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="submit-btn">
                    <Button text='submit' />
                </div>
          </form>
            </div>
        </Layout>
    )
}