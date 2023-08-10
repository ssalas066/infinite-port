import React from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import temp from '../../public/images/newLogo.jpg';

export default function About() {
    return (
        <div className={styles.container}>
            <div className=' flex min-h-screen flex-col items-center justify-between p-2'>
                <div className=' mx-auto mt-5 lg:mt-0 max-w-7xl px-6 lg:px-2 grid grid-cols-1'>
                    <h1 className=' text-center text-3xl lg:text-4xl col-span-1 mb-5 lg:mb-10 font-bold tracking-tight lg:leading-8 text-white'>
                        About Me
                    </h1>
                    <h1 className=' text-center lg:text-justify lg:indent-10 text-xl lg:text-2xl col-span-1 mb-0 lg:mb-20 font-semibold tracking-tight lg:leading-8 text-white'>
                        Skills
                    </h1>

                    <div className=' mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'>
                        <div className=' text-justify lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
                            <div className=' lg:pr-4'>
                                <div className=' lg:max-w-lg'>
                                    <h1 className=' mt-10 text-lg lg:text-2xl text-center font-semibold tracking-tight text-white'>
                                        Technical
                                    </h1>
                                    <p className=' mt-6 text-base text-center leading-8 text-white'>
                                        <ul>
                                            <li>
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=' row-start-2 -mt-12 lg:mt-8 mx-5 lg:p-10 lg:sticky lg:col-start-2 lg:row-start-1'>
                            <Image className=' mb-20 object-center border-solid border-2 border-gray-300 rounded-xl drop-shadow-xl'
                            src={temp}
                            alt='temp image'
                            width={500}
                            height={500}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}