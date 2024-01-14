"use client";
import { LoadingSpinner } from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className=" max-w-3xl space-y-4">
      <h1 className=" text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans. Unified Welcome to{" "}
        <span className=" underline">Otion</span>
      </h1>
      <h3 className=" text-base sm:text-xl md:text-2xl font-medium">
        Otion is connected Workspace where <br />
        better,faster work happens
      </h3>
      {isLoading && (
        <div className=" w-full flex justify-center items-center">
          <LoadingSpinner size={"lg"} />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href={"/documents"}>
            Enter Otion
            <ArrowRight className=" h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}

      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Otion for Free
            <ArrowRight className=" h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
