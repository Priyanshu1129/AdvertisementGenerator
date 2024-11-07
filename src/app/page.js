"use client";
import { signIn, useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function HomePage() {
  const { data: session, status } = useSession();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  if (!isClient || status === "loading") return <div>Loading...</div>;

  // console.log("status", status, "session", session);


  return (
    <div>
      {!session ? (
        <button onClick={() => signIn("google")}>Sign in with Google</button>
      ) : (
        <>
          <p>Welcome, {session?.user?.name}</p>
          <p>Your credit points: {session?.user?.creditPoints}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>)
};

