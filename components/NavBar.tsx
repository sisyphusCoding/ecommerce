import React,{FC, useRef,useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from 'next/router'
import{BsCart} from 'react-icons/bs'

const pagesLink:string[] = ['/' , '/sale' , '/store','/story' ]
const navName:string[] = ['RETROVERSE' , 'sale' , 'shop all' , 'our story']



const NavBar:FC = () => {

  const[hover,setHover] = useState<number>(0)

  const[active,setActive] = useState<number>(0)

  const router = useRouter().pathname

  const activeRef = useRef<HTMLAnchorElement>(null)

  const hoverRef = useRef<HTMLAnchorElement>(null)

  const indicatorRef = useRef<HTMLParagraphElement>(null)
  

 

 const dynActive = () => { 
  const {current:elActive} = activeRef
  const{current:elInd} = indicatorRef
  
  let w   = 0
  let h = 0
  let fromLeft = 0
  if(elActive &&elInd){ 
      

    w = elActive.offsetWidth
    h=elActive.offsetHeight
    fromLeft=elActive.offsetLeft 
      elInd.style.left = `${fromLeft}px` 

      elInd.style.height = `${h}px` 

      elInd.style.width = `${w}px`
  }
  }

  useEffect(()=>{
  dynActive()
  },[router]) 

  const handleHover = () => {
   
    

  const{current:elInd} = indicatorRef
  const{current:elHover} = hoverRef
  let w   = 0
  let h = 0
  let fromLeft = 0
  if(elHover &&elInd){ 
      

    w = elHover.offsetWidth
    h=elHover.offsetHeight
    fromLeft=elHover.offsetLeft 

    elInd.style.left = `${fromLeft}px` 

    elInd.style.height = `${h}px` 

     elInd.style.width = `${w}px`
  }
  }

  useEffect(()=>{
    handleHover()

  },[hover])



  return(
    <nav
     className="
      p-3
      bg-zinc-300 
      min-w-full h-fit
      flex items-center justify-between"
      >
      <ul
       className="
        gap-2 lg:text-lg
        relative
        flex items-center justify-center"
        >
        <p 
           className="
          transition-all ease-out duration-300
          rounded-xl bg-opacity-60 absolute top-0 left-0 bg-zinc-400"
           />
        {pagesLink.map((item,index)=>(

        <Link 
            key={index}
            href={`${item}`}>
        <a
          ref={router===item? activeRef: hover === index? hoverRef:null}
          onMouseEnter={()=>setHover(index)}    
          className={` 
          z-[1]
          rounded-xl 
          transition-all ease-in-out duration-500
          ${item ===router? 'bg-zinc-100 bg-opacity-80':'duration-700'}
         ${index === 0? 'font-semibold -tracking-widest uppercase' : ''}
          capitalize 
          px-5 py-2
          `}
          >{navName[index]}</a>    
      </Link>
        ))}
      </ul>

     <div
       className="  
        flex-col items-center
        flex justify-center
        overflow-hidden
        bg-opacity-90 bg-zinc-200
        rounded-md
        text-3xl lg:text-4xl "
       >
        <BsCart  className="py-1" />
        <h5 className="text-xs bg-zinc-50 px-5 bg-opacity-70 lg:px-8" >0</h5>
      </div>   
    </nav>
  )
}


export default NavBar
