import Header from "@/components/ui/dashboard/Header";
import Sidebar from "@/components/ui/dashboard/Sidebar";
import SidebarToggle from "@/components/ui/dashboard/SidebarToggle";

export default function BerandaLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Header />
      <SidebarToggle />
      <Sidebar />
      {children}
    </section>
  );
}
