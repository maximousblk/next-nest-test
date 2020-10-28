import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useSession } from 'next-auth/client';

export default function Home() {
  const [session, loading] = useSession();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {session && (
            <p>
              Signed in as <a href="/api/auth/signout">{session.user.name}</a>
            </p>
          )}
          {!session && (
            <p>
              Please <a href="/api/auth/signin">Sign in</a>
            </p>
          )}
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/api/auth/[...nextauth].ts</code>
        </p>

        <div className={styles.grid}>
          <a href="/api/auth/session" className={styles.card}>
            <h3>Session &rarr;</h3>
            <p>The contents of the session object.</p>
          </a>

          <a href="/api/auth/csrf" className={styles.card}>
            <h3>CSRF token &rarr;</h3>
            <p>
              NextAuth CSFR Token.
            </p>
          </a>

          <a href="/api/auth/signin" className={styles.card}>
            <h3>LogIn &rarr;</h3>
            <p>Login usig one of the providers.</p>
          </a>

          <a href="/api/auth/signin" className={styles.card}>
            <h3>LogOut &rarr;</h3>
            <p>Log out of the current session</p>
          </a>
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
