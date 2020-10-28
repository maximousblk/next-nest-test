import { useSession } from 'next-auth/client';

export default function Page() {
  const [session, loading] = useSession();
  return (
    <>
      {session && <p>Signed in as {session.user.name}</p>}
      {!session && <a href="/api/auth/signin">Sign in</a>}
    </>
  );
}
