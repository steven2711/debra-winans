import Layout from "@/components/Layout";
import styles from "@/styles/BookPage.module.css";
import { reviews } from "../data/reviews";
import Reflection from "@/components/Reflection";
import BookDisplay from "@/components/BookDisplay";

export default function LifeAlteredNotOverPage() {
  return (
    <Layout
      title="Life Altered, Not Over! | Reflections"
      description="Life Altered, Not Over addresses the reality of pain and provides essential tool for hurting individuals. Now available on Amazon."
      imagePath="/images/book-cover.jpg"
    >
      <div className={styles.display}>
        <BookDisplay display={true} />
      </div>
      <div className={styles.container}>
        <h2>reflections</h2>
        <div className={styles.reviews}>
          {reviews.map((review) => (
            <Reflection key={review.id} reflection={review} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
