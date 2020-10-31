import Head from 'next/head';
import styles from '../../styles/module.module.css';
import { Remarkable } from 'remarkable';
const HeaderIdsPlugin = require('remarkable-header-ids');

const md = new Remarkable({
  html: true,
  typographer: true,
}).use(HeaderIdsPlugin({ anchorText: '<span class="head_anchor">#</span>' }));

export default function list({ module, readme }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{module.name}</title>
        <meta property="og:title" content={module.name + ' - Nest'} />
        <meta property="og:description" content={module.description} />
        <meta property="og:image" content={`https://og.nest.land/${module.name}.png&fontSize=175px`} />

        <meta name="twitter:title" content={module.name + ' - Nest'} />
        <meta name="twitter:description" content={module.description} />
        <meta name="twitter:image" content={`https://og.nest.land/${module.name}.png&fontSize=175px`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <p>
            x/<a href={`https://nest.land/package/${module.name}`}>{module.name}</a>
          </p>
        </h1>
        <p className={styles.description}>{module.description}</p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div dangerouslySetInnerHTML={{ __html: md.render(readme) }}></div>
          </div>
        </div>
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
  const module = await fetch(`https://x.nest.land/api/package/${params.module}`).then((res) => res.json());
  const latest_mod = await fetch(`https://x.nest.land/api/package/${module.latestVersion.replace('@', '/')}`).then((res) => res.json());
  const readme = await fetch(`${latest_mod.prefix}/README.md`).then((res) => res.text());
  return {
    props: { module, readme },
    revalidate: 20,
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}
