"use client";
import React from 'react'
import { SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Tilt from 'react-parallax-tilt'

const skills = [
    {
        name: "JavaScript",
        icon: <SiJavascript />,
        percentage: 90,
    },
    {
        name: "React",
        icon: <SiReact />,
        percentage: 92,
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs />,
        percentage: 90,
    },
    {
        name: "Node.js",
        icon: <SiNodedotjs />,
        percentage: 85,
    },
    {
        name: "Tailwind Css",
        icon: <SiTailwindcss />,
        percentage: 80,
    },
    {
        name: "TypeScript",
        icon: <SiTypescript />,
        percentage: 90,
    },
    {
        name:"MongoDB",
        icon:<SiMongodb />,
        percentage: 75,
    }

]

const Skills = () => {
    return (
        <div className='pt-16 pb-16 text-white'>
            <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
                My <span className='text-cyan-300'>Skills</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-6 mt-16">
                {
                    skills.map((skill,i) => {
                        return (
                            <Tilt key={skill.name} scale={1.5} transitionSpeed={400}>
                                <div data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-delay={i * 100}
                                 className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-100">
                                    <div className="text-5xl mb-4 text-cyan-300">{skill.icon}</div>
                                    <p className="text-2xl font-semi-bold">{skill.percentage}%</p>
                                    <p className="text-purple-400 mt-1">{skill.name}</p>

                                </div>
                            </Tilt>

                        );
                    })
                }
            </div>
        </div>
    )
}

export default Skills
