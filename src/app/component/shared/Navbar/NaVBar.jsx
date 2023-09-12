
import { getData } from '@/app/api/getData';
import Link from 'next/link';
import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi"
import { IoIosArrowForward } from "react-icons/io"

const NaVBar = async () => {
    const navBar = await getData()
    const menuList = navBar.menulists;
    const subMenu = navBar.menumaps


    return (
        <nav className=' h-16 bg-[#19686d] flex justify-start items-center '>
            <ul className=' sm:container sm:mx-auto px-4 md:px-16 '>
                <li className='hidden md:flex justify-start items-center flex-wrap z-30'>
                    {
                        menuList.map(menu => <ul key={menu.id} className="group">
                            <Link className={`group text-md font-bolde ${menu.menu_label === 'home' ? 'home-hover' : ''} nav-item `} key={menu.id}
                                href={menu?.menu_label === 'home' ? `/` : subMenu[menu.menu_id] ? '/' : `/${menu.menu_route}`}
                            >
                                {menu.menu_label}
                                {
                                    subMenu[menu.menu_id] && (
                                        <ul className="hover-item-container z-50">
                                            <li className="flex flex-col justify-start items-start px-4 py-2">
                                                {
                                                    subMenu[menu.menu_id].map(submenu =>
                                                        <Link key={submenu.id} href="/"
                                                            className="hover:text-white py-2 w-full px-2 rounded-md hover:bg-[#00b3b3] ease-in duration-300"
                                                        >{submenu.submenu_label}</Link>)
                                                }
                                            </li>

                                        </ul>
                                    )
                                }

                            </Link>
                        </ul>
                        )
                    }
                </li>
                <div className='visible cursor-pointer md:hidden'>
                    <GiHamburgerMenu className='text-3xl' />
                </div>
            </ul>
        </nav>
    );
};

export default NaVBar;