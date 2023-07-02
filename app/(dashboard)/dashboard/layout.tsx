import getUsers from '../../actions/getUsers';
import SideBar from '../../components/sidebar/SideBar';
import UserList from '../../components/chats/UserList';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();

  return (
    // @ts-expect-error Server Component
    <SideBar>
      <div className='h-full'>
        <UserList items={users} />
        {children}
      </div>
      ;
    </SideBar>
  );
}
