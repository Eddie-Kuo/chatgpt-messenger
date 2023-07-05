'use client';

import clsx from 'clsx';
import EmptyDash from '../../components/EmptyDash';
import useConversation from '../../hooks/useConversation';

interface pageProps {}

export default function Home({}: pageProps) {
  const { isOpen } = useConversation();

  return (
    <div
      className={clsx('lg:pl-80 h-full lg:block', isOpen ? 'block' : 'hidden')}
    >
      <EmptyDash />
    </div>
  );
}
