import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="">Community Cred</a>!
        </h1>

        <p className={styles.description}>
          Empowering and Rewarding Positive Impact in Your Local Area
        </p>

        <div className={styles.connect}></div>

        <div className={styles.grid}>
          <a href="https://portal.thirdweb.com/" className={styles.card}>
            <h2>Earn Reward Points &rarr;</h2>
            <p>
              Engage in community activities, support local businesses, and
              volunteer to earn reward points.
            </p>
          </a>

          <a href="https://thirdweb.com/dashboard" className={styles.card}>
            <h2>Exclusive Impact NFTs &rarr;</h2>
            <p>
              Collect unique NFTs that represent your contributions to the
              community, unlocking special benefits.
            </p>
          </a>

          <a
            href="https://portal.thirdweb.com/templates"
            className={styles.card}
          >
            <h2>Powerful Community &rarr;</h2>
            <p>
              Discover and connect with like minded individuals who want to make
              an help the community.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
