import getConversations from '../../actions/getConversations';
import getUsers from '../../actions/getUsers';
import ConversationsList from '../../components/messagesSidebar/ConversationsList';
import SideBar from '../../components/navSidebar/SideBar';

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    // @ts-ignore
    <SideBar>
      <div className='h-full'>
        <ConversationsList initialItems={conversations} users={users} />
        {children}
      </div>
    </SideBar>
  );
}
