import Layout from "@/components/Layout";
import styles from "@/styles/EventPage.module.css";
import { slugify } from "../../helpers";
import Button from "@/components/Button";

export default function SingleEventPage({
  event: {
    imagePath,
    title,
    titleCaps,
    startDate,
    endDate,
    time,
    days,
    price,
    purchasePath,
    excerpt,
  },
}) {
  return (
    <Layout title={titleCaps} description={excerpt}>
      <div className={styles.container}>
        <img src={`${imagePath}`} alt={title} className={styles.image} />

        <div className={styles.info}>
          <h1>{title}</h1>
          <h2>
            {startDate}
            {`- ${endDate ? endDate : null}`}
          </h2>
          <h2>{time}</h2>
          <h2>{days ? `on ${days}` : null}</h2>
          <p>{excerpt}</p>
          {/* <h2>topics covered</h2>
          <ul>
            <li>too many voices</li>
            <li>breaking the silence</li>
            <li>betrayal & forgiveness</li>
            <li>perception is everything</li>
            <li>the best is yet to come</li>
          </ul> */}

          <p>
            To register for the class, please choose from the selections below.
            You can also Cash App me at <strong>$Debrawinans</strong>. If you
            decide to use Cash App, make sure you include your email address in
            the memo section.
          </p>
          <p>
            Once registered, you will receive an email confirmation with
            pertinent class information, including the zoom link to join the
            class.
          </p>

          <div className={styles.pricing}>
            <p>{price}</p>
            <Button text="purchase class" link={true} path={purchasePath} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const { events } = await import("../../data/events");

  const slugs = events.map((event) => slugify(event.title));
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false, // See the "fallback" section below
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { events } = await import("../../data/events");
  const event = events.filter((event) => slugify(event.title) === slug);

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: { event: event[0] }, // will be passed to the page component as props
  };
}
