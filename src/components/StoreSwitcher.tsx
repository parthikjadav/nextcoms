"use client"

import React, { useState } from "react";
import { Popover } from "@/components/ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { store } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";
import { useStoreModel } from "@/hooks/store-model";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown, Store } from "lucide-react";

type PopoverPropsT = React.ComponentPropsWithoutRef<typeof PopoverTrigger>;

interface StoreSwitcherProps extends PopoverPropsT {
  items: store[];
}

const StoreSwitcher = ({ className, items = [] }: StoreSwitcherProps) => {
  const router = useRouter();
  const params = useParams();
  const storeModal = useStoreModel();
  const [open, setOpen] = useState(false);

  const formattedItems = items.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  const currentStore = formattedItems.find(
    (item) => item.value === params.storeId
  );

  const onStoreSelect = (store: { value: string; label: string }) => {
    setOpen(false);
    router.push(`/${store.value}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          role="combobox"
          className="w-[200px] justify-between"
          aria-expanded={open}
        >
          <Store className="mr-2 w-4 h-4"/>
          {currentStore?.label}
          <ChevronsUpDown className="ml-auto w-4 h-4 shrink-0 opacity-50"/>
        </Button>
      </PopoverTrigger>
    </Popover>
  );
};

export default StoreSwitcher;
