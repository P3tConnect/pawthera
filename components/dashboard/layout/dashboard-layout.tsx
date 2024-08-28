"use client";

import { cn } from "@/src/lib/utils";
import { useStore } from "@/src/hooks/useStore";
import { Sidebar } from "@/components/dashboard/layout/sidebar";
import { useSidebarToggle } from "@/src/hooks/useSidebarToggle";
import { ContentLayout } from "./content-layout";

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <div className="p-5 h-[100vh] w-[100vw] justify-center items-center">
      <div className="flex flex-row h-full w-full justify-start items-center pt-5 pb-5 bg-background/90 backdrop-blur-xl rounded-2xl border border-border">
          <Sidebar />
          <main
            className=
              "min-h-[calc(100vh_-_56px)] transition-[margin-left] ease-in-out duration-300"
          >
            {/* <ContentLayout title="Dashboard"> */}
              {children}
            {/* </ContentLayout> */}
          </main>
      </div>
    </div>
  );
}