'use client'
import Image from "next/image";

import { useAppSelector, useAppDispatch, useAppStore } from './lib/hooks'
import { fetchUser } from "./lib/userSlice";
import { useEffect,useRef } from "react";
export default function Home() {
   // Initialize the store with the product information

  const user = useAppSelector(state => state.user.user)
console.log(user);

  const dispatch = useAppDispatch()
useEffect(()=>{
   dispatch(fetchUser())
},[])


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <>
      homePage
      </>
    </main>
  );
}
