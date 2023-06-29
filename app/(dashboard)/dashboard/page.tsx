'use client';

import { signOut } from 'next-auth/react';

interface pageProps {}

export default function page({}: pageProps) {
  return (
    <div>
      <p>Hello! Welcome to the dashboard</p>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}
