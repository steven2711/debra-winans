import Layout from "@/components/Layout";
import styles from "../styles/ContactPage.module.css";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import Button from "@/components/Button";

export default function ContactPage() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setContactInfo((prevalue) => {
      return { ...prevalue, [e.target.name]: e.target.value };
    });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    let res = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encode({
        "form-name": "debra-contact",
        ...contactInfo,
      }),
    });

    if (res.ok) {
      toast.success("We got your message!");
      setIsLoading(false);
    } else {
      toast.error("Oops... something went wrong!");
      setIsLoading(false);
    }

    setContactInfo({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <Layout
      title="Contact"
      description="Please reach out to Dr. Debra D. Winans if you have any questions."
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
      <div className={styles.contact}>
        <h1>get in touch!</h1>
        <div className={styles.formBox}>
          <form
            name="debra-contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="debra-contact" />
            <div className={styles.botfield}>
              <label>Don’t fill this out if you’re human:</label>
              <input name="bot-field" />
            </div>
            <div className={styles.formgroup}>
              <label htmlFor="name">
                name<span>*</span>
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
            <div className={styles.formgroup}>
              <label htmlFor="email">
                email address<span>*</span>
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
            <div className={styles.formgroup}>
              <label htmlFor="phone">
                phone number<span>*</span>
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
            <div className={styles.formgroup}>
              <label htmlFor="message">
                message<span>*</span>
              </label>
              <textarea
                className="form-control"
                type="text"
                id="message"
                rows="4"
                name="message"
                value={contactInfo.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div>
              <Button text="submit" type="submit" isLoading={isLoading} />
            </div>
          </form>
          <div className={styles.infoSection}>
            <h2>contact info</h2>
            <ul>
              <li>
                <FaMapMarkerAlt className={styles.icon} />
                P.O Box 931 Mableton, GA 30126
              </li>
              <li>
                <FaEnvelope className={styles.icon} />
                drdebradwinans@gmail.com
              </li>
            </ul>
            <h2>follow on</h2>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/debra.winans.50"
                  target="_blank"
                  rel="noopener"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/debra_winans/"
                  target="_blank"
                  rel="noopener"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
