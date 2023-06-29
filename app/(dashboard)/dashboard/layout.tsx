export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return(

  <SideBar>
    <div className='h-full'>{children}</div>;
  </SideBar>;
  )
}
