'use client'

import { useAppSelector, useAppDispatch, useAppStore } from './lib/hooks'
import { fetchUser } from "./lib/userSlice";
import { useEffect,useRef } from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home'
import SignUp from './SignUp/page'
import Profile from "./components/Profile/Profile";
import Patient from "./components/Profile/Patient";
import Today from "./components/Profile/Today";


export default function home() {
   // Initialize the store with the product information

  const user = useAppSelector(state => state.user.user)
console.log(user);

  const dispatch = useAppDispatch()
useEffect(()=>{
   dispatch(fetchUser())
},[])


  return (
    <main className="flex min-h-screen flex-col items-center ">
       <Profile/>
      <Today/>
      <Patient/>
     
    </main>
  );
}
