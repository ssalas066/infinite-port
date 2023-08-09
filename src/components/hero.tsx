import React from 'react';

type HeroIndexProps = {
    heading: string;
    message: string;
};

const Hero: React.FunctionComponent<HeroIndexProps> = ({heading, message}) => {
    return (
        <div className=' flex items-center justify-center h-screen mb-12 bg-fixed bg-no-repeat bg-center custom-img'>
            <div className=' absolute top-0 left-0 right-0 bottom-0 z-[2]' />
            <div className=' p-5 text-white z-[2] mt-[-10rem]'>
                <h2 className=' text-4xl mt-32 pb-72 lg:text-6xl lg:mt-20 text-center font-semibold font-jost tracking-tight'>{heading}</h2>
                <p className=' mt-20 mx-auto font-medium text-base font-jost text-center lg:text-justify lg:-mt-20 lg:text-3xl lg:px-10'>{message}</p>
            </div>
        </div>
    );
};

export default Hero;