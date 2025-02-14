"use client"

import React, { useEffect, useState } from 'react'
import StoreModel from '@/models/storeModel';

const ModelProvider = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(()=>{
    setIsMounted(true)
  },[])

  if(!isMounted){
    return null;
  }

  return (
    <>
     <StoreModel/>
    </>
  )
}

export default ModelProvider