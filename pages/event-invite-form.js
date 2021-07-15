import Layout from "@/components/Layout";
import styles from "@/styles/InvitePage.module.css";
import { useState } from "react";
import Button from "@/components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EventInviteForm() {
  return (
    <Layout>
      <h1>tes </h1>
    </Layout>
  );
}

// export default function InvitePage() {
//   const [inviteInfo, setInviteInfo] = useState({
//     ministryName: "",
//     address: "",
//     phone: "",
//     fax: "",
//     pastor: "",
//     denomination: "",
//     churchWebsite: "",
//     contactPerson: "",
//     contactPersonPhone: "",
//     contactPersonEmail: "",
//     eventType: "",
//     theme: "",
//     dates: "",
//     time: "",
//     otherSpeakers: "",
//     eventLocation: "",
//     estimatedAttendance: "",
//     honorarium: "no",
//     suggestedAmount: "",
//   });

//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e) => {
//     setInviteInfo((prevalue) => {
//       return { ...prevalue, [e.target.name]: e.target.value };
//     });
//   };

//   const encode = (data) => {
//     return Object.keys(data)
//       .map(
//         (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
//       )
//       .join("&");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setIsLoading(true);

//     let res = await fetch("/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: encode({
//         "form-name": "debra-invite-form",
//         ...inviteInfo,
//       }),
//     });

//     console.log(res);

//     if (res.ok) {
//       toast.success("We got your form! Thank you for the consideration!");
//       setIsLoading(false);
//     } else {
//       toast.error("Oops... something went wrong!");
//       setIsLoading(false);
//     }

//     setInviteInfo({
//       ministryName: "",
//       address: "",
//       phone: "",
//       fax: "",
//       pastor: "",
//       denomination: "",
//       churchWebsite: "",
//       contactPerson: "",
//       contactPersonPhone: "",
//       contactPersonEmail: "",
//       eventType: "",
//       theme: "",
//       dates: "",
//       time: "",
//       otherSpeakers: "",
//       eventLocation: "",
//       estimatedAttendance: "",
//       honorarium: "no",
//       suggestedAmount: "",
//     });
//   };

//   return (
//     <Layout
//       title="Invite Dr. Winans"
//       description="Please fill out the form on this page to invite Dr. Winans to your event or organization."
//     >
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable={false}
//         pauseOnHover
//       />
//       <div className={styles.invite}>
//         <h1>Invite Dr. Winans to your event!</h1>
//         <p>Fill out the form below for consideration</p>

//         <div className={styles.formBox}>
//           <form
//             name="debra-invite-form"
//             method="POST"
//             data-netlify="true"
//             netlify-honeypot="bot-field"
//             onSubmit={handleSubmit}
//           >
//             <input type="hidden" name="form-name" value="debra-invite-form" />
//             <div className={styles.botfield}>
//               <label>Don’t fill this out if you’re human:</label>
//               <input name="bot-field" />
//             </div>

//             <h2>ministry information</h2>

//             <div className={styles.formgroup}>
//               <label htmlFor="ministryName">
//                 name of ministry<span>*</span>
//               </label>
//               <input
//                 type="text"
//                 id="ministryName"
//                 aria-describedby="enter ministry name"
//                 name="ministryName"
//                 value={inviteInfo.ministryName}
//                 onChange={handleChange}
//                 required
//                 minLength="3"
//               />
//             </div>

//             <div className={styles.formgroup}>
//               <label htmlFor="address">
//                 address<span>*</span>
//               </label>
//               <input
//                 type="text"
//                 id="address"
//                 aria-describedby="address"
//                 name="address"
//                 value={inviteInfo.address}
//                 onChange={handleChange}
//                 required
//                 minLength="3"
//               />
//             </div>

//             <div className={styles.formgroup}>
//               <label htmlFor="phone">phone number</label>
//               <input
//                 type="tel"
//                 id="phone"
//                 aria-describedby="phone number"
//                 name="phone"
//                 value={inviteInfo.phone}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className={styles.formgroup}>
//               <label htmlFor="fax">fax number</label>
//               <input
//                 type="tel"
//                 id="fax"
//                 aria-describedby="fax number"
//                 name="fax"
//                 value={inviteInfo.fax}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className={styles.formgroup}>
//               <label htmlFor="pastor">pastor</label>
//               <input
//                 type="text"
//                 id="pastor"
//                 aria-describedby="pastor"
//                 name="pastor"
//                 value={inviteInfo.pastor}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className={styles.formgroup}>
//               <label htmlFor="denomination">
//                 ministry denomination or affiliation
//               </label>
//               <input
//                 type="text"
//                 id="denomination"
//                 aria-describedby="denomination"
//                 name="denomination"
//                 value={inviteInfo.denomination}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className={styles.formgroup}>
//               <label htmlFor="church-website">church website</label>
//               <input
//                 type="text"
//                 id="church-website"
//                 aria-describedby="church website"
//                 name="churchWebsite"
//                 value={inviteInfo.churchWebsite}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className={styles.formgroup}>
//               <label htmlFor="contact-person">
//                 contact person<span>*</span>
//               </label>
//               <input
//                 type="text"
//                 id="contact-person"
//                 aria-describedby="contact person"
//                 name="contactPerson"
//                 value={inviteInfo.contactPerson}
//                 onChange={handleChange}
//                 required
//                 minLength="3"
//               />
//             </div>

//             <div className={styles.formgroup}>
//               <label htmlFor="contact-person-phone">
//                 phone number<span>*</span>
//               </label>
//               <input
//                 type="tel"
//                 id="contact-person-phone"
//                 aria-describedby="contact person phone number"
//                 name="contactPersonPhone"
//                 value={inviteInfo.contactPersonPhone}
//                 onChange={handleChange}
//                 pattern="^(1-)?\d{3}-\d{3}-\d{4}$"
//                 required
//                 minLength="9"
//               />
//               <span className={styles.example}>Example: 555-555-5555</span>
//             </div>

//             <div className={styles.formgroup}>
//               <label htmlFor="contact-person-email">
//                 email<span>*</span>
//               </label>
//               <input
//                 type="email"
//                 id="contact-person-email"
//                 aria-describedby="contact person email"
//                 name="contactPersonEmail"
//                 value={inviteInfo.contactPersonEmail}
//                 onChange={handleChange}
//                 required
//                 minLength="5"
//               />
//             </div>

//             <h2>event information</h2>

//             <div className={styles.formgroup}>
//               <label htmlFor="event-type">
//                 type of event<span>*</span>
//               </label>
//               <input
//                 type="text"
//                 id="event-type"
//                 aria-describedby="type of event"
//                 name="eventType"
//                 value={inviteInfo.eventType}
//                 onChange={handleChange}
//                 minLength="3"
//               />
//             </div>

//             <div className={styles.formgroup}>
//               <label htmlFor="theme">theme</label>
//               <input
//                 type="text"
//                 id="theme"
//                 aria-describedby="theme"
//                 name="theme"
//                 value={inviteInfo.theme}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className={styles.formgroup}>
//               <label htmlFor="dates">
//                 date(s) required to minister<span>*</span>
//               </label>
//               <input
//                 type="text"
//                 id="dates"
//                 aria-describedby="dates"
//                 name="dates"
//                 value={inviteInfo.dates}
//                 onChange={handleChange}
//                 required
//                 minLength="3"
//               />
//             </div>

//             <div className={styles.formgroup}>
//               <label htmlFor="time">
//                 time<span>*</span>
//               </label>
//               <input
//                 type="text"
//                 id="time"
//                 aria-describedby="time"
//                 name="time"
//                 value={inviteInfo.time}
//                 onChange={handleChange}
//                 required
//                 minLength="3"
//               />
//             </div>

//             <div className={styles.formgroup}>
//               <label htmlFor="other-speakers">
//                 other scheduled speakers (if any)
//               </label>
//               <input
//                 type="text"
//                 id="other-speakers"
//                 aria-describedby="other speakers"
//                 name="otherSpeakers"
//                 value={inviteInfo.otherSpeakers}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className={styles.formgroup}>
//               <label htmlFor="event-location">
//                 location of event<span>*</span>
//               </label>
//               <input
//                 type="text"
//                 id="event-location"
//                 aria-describedby="location of event"
//                 name="eventLocation"
//                 value={inviteInfo.eventLocation}
//                 onChange={handleChange}
//                 required
//                 minLength="3"
//               />
//             </div>

//             <div className={styles.formgroup}>
//               <label htmlFor="estimated-attendance">estimated attendance</label>
//               <input
//                 type="text"
//                 id="estimated-attendance"
//                 aria-describedby="estimated attendance"
//                 name="estimatedAttendance"
//                 value={inviteInfo.estimatedAttendance}
//                 onChange={handleChange}
//               />
//             </div>

//             <h2>ministerial information</h2>

//             <div className={styles.formgroup}>
//               <label htmlFor="honorarium">
//                 will an honorarium be expected?
//               </label>

//               <div className={styles.radio}>
//                 <input
//                   type="radio"
//                   id="yes"
//                   aria-describedby="yes"
//                   name="honorarium"
//                   value="yes"
//                   checked={inviteInfo.honorarium === "yes"}
//                   onChange={handleChange}
//                 />
//                 <label htmlFor="yes">yes</label>
//                 <input
//                   type="radio"
//                   id="no"
//                   aria-describedby="no"
//                   name="honorarium"
//                   checked={inviteInfo.honorarium === "no"}
//                   value="no"
//                   onChange={handleChange}
//                 />
//                 <label htmlFor="yes">no</label>
//               </div>
//             </div>

//             <div className={styles.formgroup}>
//               <label htmlFor="suggested-amount">suggested amount</label>
//               <input
//                 type="text"
//                 id="suggested-amount"
//                 aria-describedby="suggested amount"
//                 name="suggestedAmount"
//                 value={inviteInfo.suggestedAmount}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className={styles.submitBox}>
//               <Button
//                 text="submit invite"
//                 type="submit"
//                 isLoading={isLoading}
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//     </Layout>
//   );
// }
