import { UserButton } from "@clerk/nextjs";
import React from "react";
import MainNav from "./MainNav";
import StoreSwitcher from "./StoreSwitcher";
import { store } from "@prisma/client";

const Navbar = async() => {
  const stores:store = await prisma?.store.findMany()
  return (
    <header className="border-b">
      <div className="flex items-center h-16 px-4">
        <div>
          <StoreSwitcher items={stores}/>
        </div>
        <div>
            <MainNav className="mx-6"/>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <UserButton/>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
