"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import React from "react";
import Logo from "./Logo";
import { ModeToggle } from "@/components/Mode-Toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/Loader";
import Link from "next/link";

const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 dark:bg-[#1f1f1f] flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className=" md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && (
          <>
            <LoadingSpinner />
          </>
        )}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant={"ghost"}>Sign in</Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button>Get Otion Free</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && (
          <>
            <Button variant={"ghost"} size={"sm"} asChild>
              <Link href={"/documents"}>Enter Otion</Link>
            </Button>
            <UserButton afterSignOutUrl="/"/>
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
