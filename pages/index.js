import Head from "next/head";

import styles from "../styles/Home.module.css";
import SocialNetworks from "../components/SocialNetworks";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import InputField from "../components/InputField";
import SelectMenu from "../components/SelectMenu";
import CustomSelect from "../components/CustomSelect";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationBar />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        <Modal />
        <InputField label="Test" />
        <SelectMenu
          label="Select Menu"
          options={[
            { label: "Test 1", value: "test1" },
            { label: "Test 2", value: "test2" },
          ]}
        />
        <CustomSelect
          placeholder="this is placeholder"
          options={[
            { label: "Test 1", value: "test1" },
            { label: "Test 2", value: "test2" },
          ]}
        />
      </main>

      <footer>
        {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a> */}
        <Footer />
        <SocialNetworks />
      </footer>
    </div>
  );
}
