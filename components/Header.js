import React from 'react'
import { GlobeAltIcon, UserCircleIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

function Header() {
    const router = useRouter();
  return (
    <div className='top-0 flex justify-between text-xl text-white'>
        <div className='flex p-5 space-x-5'>
            <h2 onClick={()=> router.push('https://about.google/')}className='cursor-pointer hover:underline'>About</h2>
            <h2 onClick={()=> router.push('https://store.google.com/US')} className='cursor-pointer hover:underline'>Store</h2>
        </div>
        <div className='flex p-5 space-x-5'>
            <h2 onClick={()=> router.push('https://www.gmail.com')}className='cursor-pointer hover:underline' >Gmail</h2>
            <h2 onClick={()=> router.push('https://www.google.com/imghp?hl=en&authuser=0&ogbl')}className='cursor-pointer hover:underline'>Images</h2>
            <div className='flex rounded-full hover:bg-neutral-500 p-1 cursor-pointer'>
                <GlobeAltIcon className="h-6 w-6 text-white"/>
                
            </div>
            
            <div className='flex rounded-full hover:bg-neutral-500 p-1 cursor-pointer'>
                <UserCircleIcon className="h-6 w-6 text-white"/>
            </div>
           
            {/* profile icon */}
        </div>
    </div>
  )
}

    export default Header;