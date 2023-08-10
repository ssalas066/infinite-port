import React from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Image from 'next/image';
import temp from '../../public/images/newLogo.jpg';
// import sectionGen from '';

// type ProjectProps = {
//     heading: string;
//     message: string;
// };

export default function Projects() {
    return (
        <div className={styles.container}>
            <div className=' flex min-h-screen flex-col items-center justify-between p-4 lg:p-0'>
                <div className=' items-center grid grid-rows-4 lg:grid-rows-2 lg:grid-cols-6 lg:gap-x-28 lg:gap-y-20'>
                    
                    <div className=' row-start-1 lg:row-start-1 lg:col-start-1 lg:col-span-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                        <Image className=' rounded-t-lg' src={temp} alt='first' />
                        <div className=' p-5'>
                            <h5 className=' mb-2 text-2xl font-bold tracking-tight text-white dark:text-white'>
                                First Project
                            </h5>
                            <p className=' mb-3 font-normal text-white dark:text-white'>Here is a project I have recently worked on</p>
                        </div>
                    </div>

                    <div className=' row-start-2 lg:row-start-1 lg:col-start-4 lg:col-span-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                        <Image className=' rounded-t-lg' src={temp} alt='first' />
                        <div className=' p-5'>
                            <h5 className=' mb-2 text-2xl font-bold tracking-tight text-white dark:text-white'>
                                First Project
                            </h5>
                            <p className=' mb-3 font-normal text-white dark:text-white'>Here is a project I have recently worked on</p>
                        </div>
                    </div>

                    <div className=' row-start-3 lg:row-start-2 lg:col-start-1 lg:col-span-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                        <Image className=' rounded-t-lg' src={temp} alt='first' />
                        <div className=' p-5'>
                            <h5 className=' mb-2 text-2xl font-bold tracking-tight text-white dark:text-white'>
                                First Project
                            </h5>
                            <p className=' mb-3 font-normal text-white dark:text-white'>Here is a project I have recently worked on</p>
                        </div>
                    </div>

                    <div className=' row-start-4 lg:row-start-2 lg:col-start-4 lg:col-span-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                        <Image className=' rounded-t-lg' src={temp} alt='first' />
                        <div className=' p-5'>
                            <h5 className=' mb-2 text-2xl font-bold tracking-tight text-white dark:text-white'>
                                First Project
                            </h5>
                            <p className=' mb-3 font-normal text-white dark:text-white'>Here is a project I have recently worked on</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}