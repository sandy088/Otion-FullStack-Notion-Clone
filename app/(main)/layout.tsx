'use client';
import { LoadingSpinner } from "@/components/Loader";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import React from "react";
import Navigation from "./_components/Navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  if (isLoading) {
    return <div className=" h-full w-full flex justify-center items-center">
        <LoadingSpinner size={'lg'}/></div>;
  }
  if(!isAuthenticated && !isLoading) {
    return redirect('/')
  }
  return <div className=" h-full flex dark:bg-[#1f1f1f]'">
    <Navigation/>
    <main className=" flex-1 h-full overflow-y-auto">
        {children}
    </main>
    
    </div>;
};

export default MainLayout;
