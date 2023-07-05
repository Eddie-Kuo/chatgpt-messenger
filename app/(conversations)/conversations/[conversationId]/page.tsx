import getConversationById from '@/components/app/actions/getConversationById';
import getMessages from '@/components/app/actions/getMessages';
import Header from '@/components/app/components/conversations/Header';
import EmptyDash from '@/components/app/components/EmptyDash';

interface pageProps {
  conversationId: string;
}

export default async function page({ params }: { params: pageProps }) {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);

  if (!conversation) {
    return (
      <div className='lg:pl-80 h-full'>
        <div className='h-full flex flex-col'>
          <EmptyDash />
        </div>
      </div>
    );
  }

  return (
    <div className='lg:pl-80 h-full'>
      <div className='h-full flex flex-col'>
        <Header conversation={conversation} />
      </div>
    </div>
  );
}
