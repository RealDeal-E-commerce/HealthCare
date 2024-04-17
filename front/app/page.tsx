'use client'
import Image from "next/image";
import Profile from "./components/Profile/Profile";
import Patient from "./components/Profile/Patient";
import Today from "./components/Profile/Today";

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
      <Profile/>
      <Today/>
      <Patient/>
      </>
    </main>
  );
}
