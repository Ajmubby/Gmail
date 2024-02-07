import Link from 'next/link'
import React from 'react'
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { MdLabelImportantOutline } from "react-icons/md";


export default function Mainicons() {
  return (
    <aside className='flex items-center space-x-3'>
            <MdCheckBoxOutlineBlank/>
        
            <MdOutlineStarBorder/>
        
            <MdLabelImportantOutline/>      
    </aside>
  )
}
