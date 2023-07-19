import getUsers from '../../actions/getUsers';
import SideBar from '../../components/navSidebar/SideBar';
import UserList from '../../components/peopleSidebar/UserList';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();

  return (
    // @ts-ignore
    <SideBar>
      <div className='h-full'>
        <UserList items={users} />
        {children}
      </div>
    </SideBar>
  );
}
