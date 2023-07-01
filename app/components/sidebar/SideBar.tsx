import getCurrentUser from '../../actions/getCurrentUser';
import DesktopSidebar from './DesktopSidebar';
import MobileFooterNavigation from './MobileFooterNavigation';

interface SideBarProps {
  children: React.ReactNode;
}

export default async function SideBar({ children }: SideBarProps) {
  const currentUser = await getCurrentUser();
  return (
    <div className='h-full'>
      <DesktopSidebar currentUser={currentUser} />
      <MobileFooterNavigation />
      <main className='lg:pl-20 h-full'>{children}</main>
    </div>
  );
}
