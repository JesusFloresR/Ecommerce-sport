import logoEcommerce from '../assets/logo.png'
import logoWhiteEcommerce from '../assets/logo-white2.png'

import React, { useState, useEffect } from 'react';

export function Header () {
    const [scrollY, setScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);
            if (currentScrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <header className={`header flex justify-between px-12 py-3 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-60' : 'bg-transparent'}`}>
            <div>
                <img src={isScrolled ? logoWhiteEcommerce : logoEcommerce} width={200} alt="" />
            </div>
            <div className='flex items-center gap-6'>
                <div className={`h-fit ${isScrolled ? 'text-white' : 'text-black'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </div>
                <button className='h-fit bg-rose-800 text-white p-3 rounded-md'>Iniciar Sesión</button>
            </div>
        </header>
    )
}