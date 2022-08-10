import Layout from "@/components/Layout";
import styles from "@/styles/AboutPage.module.css";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Layout title="About | Dr.Debra D. Winans" imagePath="/images/showcase-2.jpg">
      <div className={styles.container}>
        <h1>About</h1>
        <div className={styles.about}>
          <div className={styles.imageBox}>
            {/* <Image
              src="/images/debra-winans.jpg"
              width={500}
              height={600}
              alt="Dr. Debra D. Winans"
              priority="true"
              className={styles.image}
            /> */}
          </div>

          <div className={styles.text}>
            <p>
              A native of Sacramento, California, Debra D. Winans founded Linking Solutions, a Marketplace Network Company that specializes in connecting
              business professionals and ministries' jurisdictions. She graduated from Middle Tennessee State University and holds a BSC in Organization and
              Communications with a Minor in Women and Gender Studies. Ms. Winans is a recipient of an Honorary Doctorate Degree from Indian Bible College, for
              dedication and work serving on the Commission for Women conferred to her by the College's President. She holds numerous certificates in teaching,
              training, and counseling in Sexual Assault Advocacy.
            </p>

            <p>
              Ms. Winans is innate to transforming ecclesiastical and secular organizations into high-performance, profitable, and efficient entities. She is
              the author of <em>Life Altered, Not Over... My Silent Journey to Wholeness</em> and <em>The Invitation</em>, a Thomas Nelson's first women's
              devotions a collaborative novel.
            </p>
            <p>
              Ms. Winans desires to empower men and women to overcome challenges and negative perceptions that hinder them from experiencing success. She has
              two loves in her life, her children, Miya, and Benjamin.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

<Link href="/life-altered-not-over">Life Altered, Not Over… My Silent Journey to Wholeness</Link>;
