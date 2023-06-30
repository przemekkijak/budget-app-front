import React from "react";
import Sidebar from "@/features/auth/components/Sidebar";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="absolute left-0 top-0 h-full w-full bg-white">
      <Sidebar/>
      <main className="flex-1 p-4">{children}</main>
    </div>
  )
}