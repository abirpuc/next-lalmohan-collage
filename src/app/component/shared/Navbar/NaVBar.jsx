import { getData } from '@/app/api/getData';
import Link from 'next/link';
import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi"
import { IoIosArrowForward } from "react-icons/io"

const NaVBar = async() => {
    const navBar = await getData()
    const menuList = navBar.menulists;
    const subMenu = navBar.menumaps
    console.log(subMenu)
    return (
        <section className=' h-16 bg-[#19686d] flex justify-start items-center '>
            <div className=' sm:container sm:mx-auto px-4 md:px-16 '>
                <div className=' hidden md:flex justify-start items-center flex-wrap z-30'>
                   {
                    menuList.map(menu =><ul className="group">
                        <Link className={`group nav-item text-md font-bolde${menu.menu_label === 'home'? 'bg-[#00b3b3] text-white':''} `} key={menu.id} href="">
                            {menu.menu_label}
                            {
                                subMenu[menu.menu_id] && (
                                    <div className="hidden absolute mt-[30px] ml-2 group-hover:block pt-4 bg-[#19686d] text-white rounded-lg group-hover:ease-in group-hover:duration-300">
                                        <div className="flex flex-col justify-start items-start px-4 py-2">
                                        {
                                            subMenu[menu.menu_id].map(submenu => 
                                            <Link href="/"
                                                className="hover:text-white py-2 w-full px-2 rounded-md hover:bg-[#00b3b3] ease-in duration-300"
                                            >{submenu.submenu_label}</Link>)
                                        }
                                        </div>
                         
                         </div>
                                )
                            }
                           
                        </Link>
                        </ul> 
                    )
                   }
                </div>
                <div className='visible md:hidden'>
                    <GiHamburgerMenu className='text-3xl'/>
                </div>
            </div>
        </section>
    );
};

export default NaVBar;