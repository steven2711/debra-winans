import styles from "@/styles/EventCard.module.css";
import Button from "./Button";
import { slugify } from "../helpers";
import Image from "next/image";

export default function EventCard({
  event: { smallImagePath, title, startDate, endDate, time, days, excerpt },
}) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={smallImagePath}
          alt={title}
          width={500}
          height={356}
          className={styles.image}
          layout="responsive"
        />
      </div>
      <div className={styles.info}>
        <h3>{title}</h3>
        <h4>
          {startDate} {endDate ? `- ${endDate}` : null}
        </h4>
        <h4>{time}</h4>
        <h4>{days ? `Held on ${days}` : null}</h4>
        <p>{excerpt}</p>
        <Button
          text="more info"
          link={true}
          path={`/events/${slugify(title)}`}
        />
      </div>
    </div>
  );
}
