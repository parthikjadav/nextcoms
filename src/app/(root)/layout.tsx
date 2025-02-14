import prismaDB from "@/lib/prisma/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const layout = async ({ children }: { children: ReactNode }) => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismaDB.store.findFirst({ where: { userId } });
// console.log(store,"Store");

  if (store) {
    redirect(`/${store.id}`);
  }else{
    console.log(store,"store root layout");
    
  }
  return <>{children}</>;
};

export default layout;
