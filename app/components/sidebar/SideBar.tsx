import DesktopSidebar from './DesktopSidebar';
import MobileFooter from './MobileFooter';

interface SideBarProps {
  children: React.ReactNode;
}

export default async function SideBar({ children }: SideBarProps) {
  return (
    <div className='h-full'>
      <DesktopSidebar />
      <MobileFooter />
      <main className='lg:pl-20 h-full'>{children}</main>
    </div>
  );
}
