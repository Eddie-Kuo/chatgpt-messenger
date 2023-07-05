import getConversations from '../../actions/getConversations';
import ConversationsList from '../../components/messagesSidebar/ConversationsList';
import SideBar from '../../components/navSidebar/SideBar';

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
