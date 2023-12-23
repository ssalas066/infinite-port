import React, { PropsWithChildren } from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
        <Navbar />
        <div className=' bg-eggplant'>
            {/* <div className=' bg-hero bg-no-repeat bg-contain bg-fixed bg-center' id='bg'> */}
            <div className=' bg-hero bg-no-repeat bg-contain bg-fixed bg-center' id='bg'>

                {children}
            </div>
        </div>
        {/* <Footer /> */}
        </>
    )
}

export default Layout;