"use client";

import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Navbar() {
    const { status } = useSession();
    return (
        <div className='p-4 flex justify-between items-center shadow-md'>
            <Link className='font-bold text-lg text-blue-700' href={"/"}>My app</Link>
            {
                status === 'authenticated' ?

                    (<button className='bg-slate-900 text-white px-6 py-2 rounded-md'
                        onClick={() => signOut()}>Sign Out</button>) :
                    (<button className='bg-slate-900 text-white px-6 py-2 rounded-md'
                        onClick={() => signIn()}>Sign In</button>)
            }
        </div>
    )
}