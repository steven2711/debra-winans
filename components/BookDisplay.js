import styles from "@/styles/BookDisplay.module.css";
import Image from "next/image";
import Button from "@/components/Button";

export default function BookDisplay({ display }) {
  return (
    <section className={styles.bookDisplay}>
      <div className={styles.image}>
        <p>REVISED ADDITION COMING SOON</p>
        {/* <Image
          src="/images/book-cover.jpg"
          width={500}
          height={650}
          alt="Life Altered, Not Over! My Silent Journey to Wholeness"
        /> */}
      </div>
      <div className={styles.info}>
        <div>
          <h1>Life, Altered Not Over!</h1>
          <h2>My Silent Journey to Wholeness</h2>
        </div>

        <div>
          <p>
            Nothing can inspire us more than a human story with which we can all relate; a story that encourages us to believe in our own dreams and to have
            faith in the promises of God who sometimes seems far away. Life Altered Not Over! addresses the reality of pain and provides essential tool for
            hurting individuals. People in any type of emotional, mental and spiritual pain are looking for “how-to-get-healed tools. This life changing book
            provides just that; how to be healed, be free, be whole and to live your best life! Order now to receive an autographed copy!
          </p>
          <p>**Note** Amazon orders are not autographed.</p>
        </div>

        <div className={styles.btns}>
          <Button text="order now" link={true} path="https://checkout.square.site/merchant/MLH6RXNFN7NQ5/checkout/JQS4HKDONCUF26QAPOTTIUES" />
          {display ? (
            <Button
              text="order on amazon"
              link={true}
              path="https://www.amazon.com/LIFE-ALTERED-NOT-OVER-Wholeness/dp/1953443001/ref=sr_1_6?dchild=1&keywords=life+altered+not+over+book&qid=1623702537&sr=8-6"
            />
          ) : (
            <Button text="reflections" link={true} path="/life-altered-not-over" btnDark={true} />
          )}
        </div>
      </div>
    </section>
  );
}

BookDisplay.defaultProps = {
  display: false,
};
