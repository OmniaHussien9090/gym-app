import React from 'react';
import Button from "./Button";

const Hero = (props) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-10 text-center max-w-[800px] w-full mx-auto">
            <div className='flex flex-col gap-4'>
                <p className='uppercase font-medium'>It is Time To Get</p>
                <h1
                    className='uppercase font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'
                >Fitness<span className='text-blue-400'>360</span></h1>
            </div>

            <p className='text-sm md:text-base font-light'>
                Unlock your full potential with <span className='text-blue-400 font-medium'>Fitness360!</span> Whether
                you're a beginner or a seasoned athlete,
                our app offers personalized workout plans, nutrition guidance, and progress tracking to help you
                achieve your fitness goals. Join a community dedicated to health and well-being <br/>
                <span className='text-blue-400 font-medium italic'>Start your journey today, and let’s make fitness a lifestyle!</span>
            </p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    );
};


export default Hero;
