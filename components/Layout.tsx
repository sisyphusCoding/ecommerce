import React,{FC, ReactNode} from "react";
import {motion} from 'framer-motion'
import NavBar from "./NavBar";
interface layoutProps {
  children:ReactNode
}


const Layout:FC<layoutProps> = ({children}) => {
  return(
    <main 
     className="
      flex-col
     flex items-center justify-between
     min-h-screen min-w-full bg-zinc-100 text-zinc-800">
    <NavBar/>
    <motion.section
    className="
        flex items-center justify-center
        min-w-full grow"
        >
      {children}
      </motion.section>  
    </main>
  )
}


export default Layout
