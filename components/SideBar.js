import React, { useState } from 'react'
import Image from "next/image"
import { useRouter } from 'next/router';

function SideBar() {
    const [open, setOpen] = useState(true)
    const router = useRouter();
  return (
    <div className={`${open ? 'w-11/12 lg:w-1/5' : 'w-20'} fixed duration-300 h-full bg-gradient-to-t left-0 from-red-500 via-red-600 to-red-700 z-50`}>
        <div 
            className='absolute h-44 w-4 rounded-full bg-black/80 right-0 top-1/3 flex items-center justify-center cursor-pointer'
            onClick={() => setOpen(!open)}
        >
            <div className='flex flex-col space-y-3'>
                <div className='bg-white w-3 h-3 rounded-full'></div>
                <div className='bg-white w-3 h-3 rounded-full'></div>
                <div className='bg-white w-3 h-3 rounded-full'></div>
            </div>
        </div>
        
        <div className='h-1/5'></div>
        <div className="h-4/5 text-white text-lg flex flex-col items-start p-3">
            <button className='flex items-center space-x-6 w-full hover:bg-white/10 py-10 px-4 rounded-2xl'>
                <Image
                    alt=''
                    src='/Union.svg'
                    height={30}
                    layout="fixed"
                    width={30}
                />
                <p className={`duration-150 ${!open && 'hidden'}`}>
                    My music list
                </p>
                
            </button>
            <button className='flex items-center space-x-6 w-full hover:bg-white/10 py-10 px-4 rounded-2xl'>
                <Image
                    alt=''
                    src='/read.svg'
                    height={30}
                    layout="fixed"
                    width={30}
                />
                <p className={`duration-150 ${!open && 'hidden'}`}>
                    My lyrics collection
                </p>
            </button>
            <button className='flex items-center space-x-6 w-full hover:bg-white/10 py-10 px-4 rounded-2xl'>
                <Image
                    alt=''
                    src='/suppo.svg'
                    height={30}
                    layout="fixed"
                    width={30}
                />
               <p className={`duration-150 ${!open && 'hidden'}`}>
                    Chat with musicians
                </p>
            </button>
            <button className= 'flex items-center space-x-6 w-full hover:bg-white/10 py-10 px-4 rounded-2xl' onClick={() => router.push('/')}>
                <Image
                    alt=''
                    src='/Leading Icon.svg'
                    height={30}
                    layout="fixed"
                    width={30}
                />
                <p className={`duration-150 ${!open && 'hidden'}`}>
                    Logout
                </p>
            </button>
        </div>
    </div>
  )
}

export default SideBar