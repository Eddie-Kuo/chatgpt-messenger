import getConversations from '../../actions/getConversations';
import ConversationsList from '../../components/conversations/ConversationsList';
import SideBar from '../../components/sidebar/SideBar';

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();

  return (
    // @ts-expect-error
    <SideBar>
      <div className='h-full'>
        <ConversationsList initialItems={conversations} />
        {children}
      </div>
    </SideBar>
  );
}
