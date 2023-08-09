import React, { PropsWithChildren } from 'react';
import Navbar from './navbar';
// import  from './footer';

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
        <Navbar />
        <div className=' bg-page'>
            <div className=' bg-hero bg-no-repeat bg-contain bg-fixed bg-center' id='bg'>
                {children}
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Layout;