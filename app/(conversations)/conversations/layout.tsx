import SideBar from '../../components/sidebar/SideBar';

export default function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // @ts-expect-error
    <SideBar>
      <div className='h-full'>{children}</div>
    </SideBar>
  );
}
