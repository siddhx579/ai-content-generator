"use client";

import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import UsageTrack from './UsageTrack';

function SideNav() {
    const MenuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            name: 'History',
            icon: FileClock,
            path: '/dashboard/history'
        },
        {
            name: 'Billing',
            icon: WalletCards,
            path: '/dashboard/billing'
        },
        {
            name: 'Settings',
            icon: Settings,
            path: '/dashboard/settings'
        },
    ];

    const path = usePathname();
    useEffect(() => {
        console.log(path);
    })

    return (
        <div className='h-screen relative p-5 shadow-sm border bg-white'>
            <div className='flex justify-center'>
                <span>WriteFlow</span>
            </div>
            <hr className='my-6 border' />
            <div className='mt-3'>
                {MenuList.map((menu, index) => (
                    <Link href={menu.path} key={index}>
                        <div className={`flex gap-2 mb-2 p-3 hover:bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-600 hover:text-white rounded-lg cursor-pointer items-center ${path == menu.path && 'bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-600 text-white'}`}>
                            <menu.icon className='h-6 w-6' />
                            <h2 className='text-lg'>{menu.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='absolute bottom-10 left-0 w-full'>
                <UsageTrack />
            </div>
        </div>
    );
}

export default SideNav;