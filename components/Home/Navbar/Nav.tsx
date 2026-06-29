"use client";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaCode } from 'react-icons/fa'
import { NavLinks, RESUME_LINK } from '@/constant/constant'
import { BiDownload } from 'react-icons/bi'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props={
    openNav:()=>void;
}

const Nav = ({openNav}:Props) => {
    const [navBg,setNavBg]= useState(false);
    useEffect(()=>{
        const handler=()=>{
            if(window.scrollY>=90) setNavBg(true);
            if(window.scrollY<90) setNavBg(false);
    
        };
        window.addEventListener('scroll', handler);
        return ()=>window.removeEventListener('scroll',handler);        
    },[]);
    return (
        <div className={`translate-all ${navBg ? 'bg-[#0f142ed9] shadow-md' : 'fixed'} duration-200 h-[12vh] z-10000 fixed w-full`}>
            <div className="flex items-center h-full justify-between w-[90%] mx-auto">
                {/* logo */}
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
                        <FaCode className="text-black h-5 w-5" />
                    </div>
                    <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
                        Abhishek
                    </h1>
                </div>
                {/* navlinks */}
                <div className="hidden lg:flex items-center space-x-10">
                    {NavLinks.map((link) => {
                        return (
                            <Link
                                key={link.id}
                                href={link.url}
                                className="text-base hover:text-cyan-300 text-white font-medium  transition-all duration-200"
                            >
                                <p>{link.label}</p>
                            </Link>
                        );
                    })}
                </div>

                {/* buttons */}
                <div className="flex items-center space-x-4">
                    <Link
                        href={RESUME_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2"
                    >
                        <BiDownload className="h-5 w-5" />
                        <span>Resume</span>
                    </Link>
                    {/* burger menu */}
                    <HiBars3BottomRight onClick={openNav} className="h-8 w-8 cursor-pointer text-white lg:hidden" /> 
                </div>
            </div>
        </div>
    )
}

export default Nav
