"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const Page = () => {
  const router = useRouter();
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({
      title: "New Document",
    }).then((documentId) => {
      router.push(`/documents/${documentId}`);
    });

    toast.promise(promise, {
      loading: "Creating document...",
      success: "Document created!",
      error: "Error creating document",
    });
  };

  console.log(user);
  return (
    <div className=" h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src={"/empty.png"}
        height={300}
        width={300}
        alt="empty"
        className=" dark:hidden"
      />
      <Image
        src={"/empty-dark.png"}
        height={300}
        width={300}
        alt="empty"
        className=" dark:block hidden"
      />
      <h2 className=" text-lg font-medium">
        Welcome to {user?.firstName !== null ? user?.firstName : "your"}&apos;s
        Otion
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className=" h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default Page;
