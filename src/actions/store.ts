"use server"

import prismaDB from "@/lib/prisma/prisma"
import { auth } from "@clerk/nextjs/server"


export const createStore =async (name:string)=>{
   try {
      console.log("called",name);
      
      const {userId}=await auth()
      console.log("called username",userId);

      if(!userId) return {
         success:false,
         message:"User not authenticated"
      }
      console.log("called after userid");
      
      const res = await prismaDB.store.create({data:{
         name,
         userId,
      }})

      console.log("callded after res");
      
   console.log(res,"res");
   
      if(!res) return {
         success:false,
         message:"Failed to create store"
      }
   
      return {
         success:true,
         data:res,
         message:"Store created successfully"
      }
   } catch (error:any) {
      console.error(error.message,"err message")
      return {
         success:false,
         message:"Afgdn error occurred"
      }
   }

}