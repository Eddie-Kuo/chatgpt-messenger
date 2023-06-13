import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='flex flex-row justify-center items-center gap-1'>
          <Image
            alt='logo'
            height={48}
            width={48}
            src='/images/messenger-logo.png'
          />
          <p className='mx-2 text-2xl font-bold'>+</p>
          <Image alt='logo' height={48} width={48} src='/images/openai.png' />
        </div>
        <h2 className='mt-6 text-center text-3xl font-bold tracking-light text-gray-900'>
          Sign into your account{' '}
        </h2>
      </div>
    </div>
  );
}
