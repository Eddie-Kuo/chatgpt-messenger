'use client';

import clsx from 'clsx';
import useConversation from '../../hooks/useConversation';
import EmptyDash from '../../components/EmptyDash';

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
