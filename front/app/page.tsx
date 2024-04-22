'use client'

import { useAppSelector, useAppDispatch, useAppStore } from './lib/hooks'

import { useEffect,useRef } from "react";
import Home from './components/Home'


export default function home() {
   // Initialize the store with the product information

  // const user = useAppSelector(state => state.user.user)
// console.log(user);

  const dispatch = useAppDispatch()
useEffect(()=>{
  //  dispatch(fetchUser())
},[])


  return (
    <main className="flex min-h-screen flex-col items-center ">
       <Home/>

     
    </main>
  );
}
function fetchUser(): any {
  throw new Error('Function not implemented.');
}

