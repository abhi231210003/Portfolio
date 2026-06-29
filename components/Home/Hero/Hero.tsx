"use client";
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import { BsArrowRight } from 'react-icons/bs';
import ParticlesHero from './ParticleBackground';

function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <ParticlesHero />
        <div className="relative z-10 flex flex-col items-center">
            <Image src="/images/s1.jpg" alt="heroimage" width={150} height={150} className="rounded-full border-8 border-[#0c0c48aa]" priority data-aos="fade-up"/>
            <h1 data-aos="fade-up" data-aos-delay="200" className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide">Creating Web Products,<br />brands,<span className='text-cyan-200'> and Experiences.</span>
            </h1>
            <h2 data-aos="fade-up" data-aos-delay="400" className="text-sm mt-5 px-2 text-center sm:text-2xl font-medium flex items-center">Hi! I'm Abhishek - A passionate 
              <span className='text-cyan-200 font-bold'>
                <Typewriter
                  options={{
                    strings: ['Frontend Developer','Backend Developer','Web Developer', 'AI/ML Enthusiast', 'GenAI Enthusiast'],
                    autoStart: true,
                    loop: true,
                    delay:75,
                    deleteSpeed: 50,
                    wrapperClassName: 'pl-2',
                  }}
                />
              </span>
            </h2>
            <button data-aos="fade-up" data-aos-delay="600" className="mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium">
              <span>See my Work</span>
              <BsArrowRight className="ml-2 h-5 w-5 inline-block" />

            </button>

        </div>
      
    </div>
  )
}

export default Hero
