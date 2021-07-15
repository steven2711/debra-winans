import styles from "@/styles/InviteBanner.module.css";
import Button from "@/components/Button";

export default function InviteBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <h2>invite dr. winans</h2>
        <p>
          Would you like Dr. Winans to speak at your event? Follow the link and
          fill out the invitation form!
        </p>
        <Button text="submit an invite" link={true} path="/invite" />
      </div>
    </section>
  );
}
