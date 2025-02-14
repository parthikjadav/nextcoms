import Navbar from "@/components/Navbar";
import prismaDB from "@/lib/prisma/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const DashBoardLayout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: { storeId: string };
}) => {
  const { userId } = await auth();
  const { storeId } = await params;
  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismaDB.store.findFirst({
    where: {
      id: storeId,
      userId,
    },
  });

  

  if (!store) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default DashBoardLayout;
