"use client"

import { Button } from "@/components/ui/button";
import { useStoreModel } from "@/hooks/store-model";
import { config } from "@/lib/env";
import { useEffect } from "react";

export default function Home() {
  const isOpen = useStoreModel((state)=>state.isOpen)
  const onOpen = useStoreModel((state)=>state.onOpen)
  // const onClose = useStoreModel((state)=>state.onClose)
  
  useEffect(()=>{
    console.log(isOpen,"open or not");
     if(!isOpen){
       onOpen()
       console.log(isOpen,"open or not");
     }
  },[isOpen,onOpen])

  return null
}
