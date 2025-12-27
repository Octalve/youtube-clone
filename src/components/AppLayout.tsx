import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Header onMenuClick={() => setSidebarOpen((s) => !s)} />

      <div className="pt-14">
        <div className="mx-auto flex max-w-[1680px]">
          <Sidebar open={sidebarOpen} />

          <main className="min-w-0 flex-1 px-4 py-4 md:px-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
