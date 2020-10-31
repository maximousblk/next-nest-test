import Head from 'next/head';
import styles from '../../styles/x.module.css';

export default function list({ modules, count }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Modules - Nest</title>
        <meta property="og:title" content="Modules - Nest" />
        <meta property="og:description" content="Find awesome Deno modules on Nest" />
        <meta property="og:image" content="https://og.nest.land/.png" />

        <meta name="twitter:title" content="Modules - Nest" />
        <meta name="twitter:description" content="Find awesome Deno modules on Nest" />
        <meta name="twitter:image" content="https://og.nest.land/.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <p>Modules</p>
        </h1>

        <p className={styles.description}>
          Currently listing <code className={styles.code}>{count}</code> modules
        </p>

        <div className={styles.grid}>
          {modules.map((module, i) => (
            <a href={`x/${module.name}`} className={styles.card} key={i}>
              <h3>{module.name}</h3>
              <p>{module.description}</p>
              <sub>by @{module.owner}</sub>
            </a>
          ))}
        </div>
        <p>You've reached the nether region!</p>
      </main>

      <footer className={styles.footer}>
        <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const modules = await fetch(`https://x.nest.land/api/packages`).then((res) => res.json());
  return { props: { modules, count: modules.length }, revalidate: 20 };
}
