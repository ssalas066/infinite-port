import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import temp from '../../public/images/

const Navbar = () => {

    // const void = require("../../public/images/voidLogo.jpg")
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('black')

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(()=> {
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setColor('black')
                setTextColor('white')
            } else {
                setColor('transparent')
                setTextColor('black')
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);

    return (
        <div style={{backgroundColor: `${color}`}} className=' fixed left-0 top-0 w-full z-10 ease-in duration-300'>
            <div className=' max-w-7xl m-auto lg:m-0 flex justify-between items-center p-2 text-black'>
                <Link href='/'>
                    {/* <Image className=' block fill-current text-white h-15 w-15 mr-2 ml-2 lg:ml-10' src={} width={60} height={60} alt='logo'/> */}
                </Link>
                <ul style={{color: `${textColor}`}} className=' hidden sm:flex'>
                    <li className=' p-4 no-underline hover:underline hover:text-sky-600 hover:bg-slate-500/20 rounded-md text-xl font-semibold'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li onClick={handleNav} className=' p-4 no-underline hover:underline hover:text-slate-700 hover:bg-slate-500/20 rounded-md text-xl font-semibold'>
                        <Link href='#about'>About Me</Link>
                        </li>
                        <li className=' p-4 no-underline hover:underline hover:text-slate-700 hover:bg-slate-500/20 rounded-md text-xl font-semibold'>
                        <Link href='#projects'>Projects</Link>
                        </li>
                        <li className=' p-4 no-underline hover:underline hover:text-slate-700 hover:bg-slate-500/20 rounded-md text-xl font-semibold'>
                        <Link href='#contact'>Reach Out</Link>
                        </li>
                </ul>

                {/* Mobile Button */}
                <div onClick={handleNav} className=' block sm:hidden z-10'>
                    {nav ? <AiOutlineClose size={20} style={{color: 'black'}} /> : <AiOutlineMenu size={20} style={{color: `${textColor}`}} />}
                </div>

                {/* Mobile Menu */}
                <div className={nav
                ? ' sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-700 bg-opacity-95 text-center ease-in duration-300' 
                : ' sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-transparent text-center ease-in duration-300'}>
                    <ul>
                        <li onClick={handleNav} className=' p-4 text-4xl'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li onClick={handleNav} className=' p-4 text-4xl'>
                            <Link href='#about'>About Me</Link>
                        </li>
                        <li onClick={handleNav} className=' p-4 text-4xl'>
                            <Link href='#projects'>Projects</Link>
                        </li>
                        <li onClick={handleNav} className=' p-4 text-4xl'>
                            <Link href='#contact'>Reach Out</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


        // <header className='w-full px-32 py-8 font-medium'>
        //     <nav>
        //         <Link href='/'>Home</Link>
        //         <Link href='/about'>About</Link>
        //         <Link href='/projects'>Projects</Link>
        //         <Link href='/articles'>Articles</Link>
        //     </nav>
            
        //     </header>
    );
}

export default Navbar;