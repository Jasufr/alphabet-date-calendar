import SideMenu from "../ui/calendar/sidemenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <SideMenu />
      <div className="flex-grow p-3">{children}</div>
    </div>
  );
}
