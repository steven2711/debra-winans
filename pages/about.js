import Layout from "@/components/Layout";
import styles from "@/styles/AboutPage.module.css";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Layout
      title="About | Dr.Debra D. Winans"
      imagePath="/images/showcase-2.jpg"
    >
      <div className={styles.container}>
        <h1>About</h1>
        <div className={styles.about}>
          <div className={styles.imageBox}>
            <Image
              src="/images/debra-winans.jpg"
              width={500}
              height={600}
              alt="Dr. Debra D. Winans"
              priority="true"
              className={styles.image}
            />
          </div>

          <div className={styles.text}>
            <p>
              <strong>Debra D. Winans</strong> is CEO of Linking Solutions, a
              Marketplace Network Company. Debra is the author of{" "}
              <Link href="/life-altered-not-over">
                Life Altered, Not Over… My Silent Journey to Wholeness
              </Link>
              , which deals with the recovery process of divorce; that the
              purpose of God for our lives does not change like our
              circumstances. Debra’s undying motto is:
            </p>

            <div className={styles.quote}>
              <blockquote>
                “I was not married into a purpose; I was created with purpose!”
              </blockquote>
              <span>-Dr. Debra D. Winans</span>
            </div>

            <p>
              Debra’s passion is to see men and women walk in their divine
              purpose despite all the tragic circumstances in their lives, to be
              whole in every area of life and to live in a place of freedom,
              peace, and the pursuit of purpose. With more than two decades of
              experience helping to build leading organizations (both religious
              and secular), Debra has an uncanny ability to refine business
              operations and reconnect them to their original mission and goals,
              to drive the company’s production capacity and profitability. Ms.
              Winans brilliantly identifies the crucial areas that need to be
              reconstructed to revitalize the leadership and to promote vitality
              and growth in deprived areas.
            </p>

            <p>
              Ms. Winans has earned numerous certificates for teaching,
              training, and counseling in Sexual Assault Advocacy Training. It
              is no wonder that she has become a highly sought motivational
              speaker and teacher, gracing colleges and conferences all over the
              country. Her pearls of wisdom, foresight and understanding are
              precious commodities that many are seeking.
            </p>

            <p>
              Debra has earned a Bachelor of Science in (ORCO) Organization and
              Communications with a minor in Women and Gender Studies at Middle
              Tennessee State University. She has received an Honorary Doctorate
              in Philosophy from Trinity International University of Ambassadors
              College. Debra served on the President’s Commission for Women at
              Middle Tennessee State University.
            </p>

            <p>
              Debra has two amazing children, Miya Destiny and Benjamin David,
              the loves of her life.
            </p>
            <Link href="/contact">Test</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
