import EmptyDash from '../../components/EmptyDash';

interface pageProps {}

export default function page({}: pageProps) {
  return (
    <div className='hidden lg:block lg:pl-80 h-full'>
      <EmptyDash />
    </div>
  );
}
