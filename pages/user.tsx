import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useSession } from 'next-auth/client';

export default function User() {
  const [session, loading] = useSession();
  return (
    <div className={styles.container}>
      <Head>
        <title>User - Nest</title>
        <meta name="description" content="User Profile" />

        <meta property="og:title" content="User - Nest" />
        <meta property="og:description" content="User Profile" />
        <meta property="og:image" content="https://og.nest.land/.png" />

        <meta name="twitter:title" content="User - Nest" />
        <meta name="twitter:description" content="User Profile" />
        <meta name="twitter:image" content="https://og.nest.land/.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {loading && <p>loading...</p>}
          {!loading && !session && (
            <p>
              Please <a href="/api/auth/signin">Sign in</a>
            </p>
          )}
          {!loading && session && (
            <p>
              Signed in as <a href="/api/auth/signout">{session.user.name}</a>
            </p>
          )}
        </h1>
        {!loading && session && (
          <p className={styles.description}>
            User email: <code className={styles.code}>{session.user.email}</code>
          </p>
        )}

        <div className={styles.grid}>
          <a href="/api/auth/signin" className={styles.card}>
            <h3>LogIn</h3>
            <p>Login using one of the providers.</p>
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
