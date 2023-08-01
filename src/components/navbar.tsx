import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('black')

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(()=> {
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setColor('')
                setTextColor('')
            } else {
                setColor('transparent')
                setTextColor('')
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);

    return (
        <header className='w-full px-32 py-8 font-medium'>
            <nav>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='/articles'>Articles</Link>
            </nav>
            
            </header>
    )
}

export default Navbar