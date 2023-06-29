import DesktopSidebar from './DesktopSidebar';

interface SideBarProps {
  children: React.ReactNode;
}

export default async function SideBar({ children }: SideBarProps) {
  return (
    <div className='h-full'>
      <DesktopSidebar />
      <main className='lg:pl-20 h-full'>{children}</main>
    </div>
  );
}
