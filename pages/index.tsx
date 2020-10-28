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
          <a href="/api/auth/signin" className={styles.card}>
            <h3>LogIn</h3>
            <p>Login usig one of the providers.</p>
          </a>

          <a href="/api/auth/signout" className={styles.card}>
            <h3>LogOut</h3>
            <p>Log out of the current session</p>
          </a>

          <a href="/api/auth/session" className={styles.card}>
            <h3>Session</h3>
            <p>The contents of the session object.</p>
          </a>

          <a href="/api/auth/csrf" className={styles.card}>
            <h3>CSRF token</h3>
            <p>NextAuth CSRF Token.</p>
          </a>

          <a href="/api/auth/providers" className={styles.card}>
            <h3>Providers</h3>
            <p>Available providers.</p>
          </a>

          <a href="https://github.com/maximousblk/auth-test" className={styles.card}>
            <h3>Source code</h3>
            <p>Source code on GitHub.</p>
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
