import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TitleHeader from '../components/TitleHeader';



gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {

    const sectionRef = useRef(null);
    const project1Reft = useRef(null);
    const project2Reft = useRef(null);
    const project3Reft = useRef(null);

    const techStack = ["NEXT.JS", "TypeScript", "Puter", 'Git']



    useGSAP(() => {
        const projects = [project1Reft.current, project2Reft.current, project3Reft.current];

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0
                },

                {
                    y: 0, opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    ScrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        })


        gsap.fromTo(project1Reft.current,
            { opacity: 0 }, { opacity: 1 }, { duration: 1.5 });
    }, [])

    return (
        <>
            <section ref={sectionRef} id='work' className='app-showcase'>
                <div className='w-full'>
                    <TitleHeader
                        title="Latest Projects"
                        sub="📋 Projects and Contributions"
                    />
                    <div className='showcaselayout'>
                        <div className='first-project-wrapper' ref={project1Reft}>
                            <div className='image-wrapper'>
                                <a href='https://saas-app-xmxq-c6o698x5l-zinhle-mahlangus-projects.vercel.app/'>
                                    <img src='/images/converso.png' alt='converso' />
                                </a>
                            </div>
                            <div className='text-content'>
                                <h2>Converso is an AI-Powered educational assistant programme designed to provide tailored Voice enabled AI learning companions. <a href='https://saas-app-xmxq-c6o698x5l-zinhle-mahlangus-projects.vercel.app/'><span className='bg-green-500 ml-1.5 mb-2.5 rounded-3xl p-1.5 cursor-pointer hover:bg-green-600 text-sm'>View Project</span></a></h2>
                                <p className='text-white-50 md:text-xl'>AI Powered Platform for improving your CV</p>
                            </div>
                        </div>

                        <div className='project-list-wrapper overflow-hidden'>

                            <div className='project' ref={project2Reft}>
                                <div className='image-wrapper bg-[#2f4f6f]'>

                                    <img src='/images/movies.png' alt='movie dox' />
                                </div>
                                <h2 className=''> Movie Dox <a href='https://movieapp-be124.firebaseapp.com/'><span className='bg-green-500 ml-1.5 mb-2.5 rounded-3xl p-1.5 cursor-pointer hover:bg-green-600 text-sm'>View Project</span></a></h2>
                                <p>Get all the latest moview with Movie Dox</p>

                            </div>

                            <div className='project' ref={project3Reft}>
                                <div className='image-wrapper bg-[#2f4f6f]'>
                                    <img src='/images/mirsv.png' alt='mirsv.io' />
                                </div>
                                <h2 className=''>Mirsv.io<a href='https://mirsv.io'> <span className='bg-green-500 ml-1.5 mb-2.5 rounded-3xl p-1.5 cursor-pointer hover:bg-green-600 text-sm'>View Project</span></a></h2>
                                <p>Built for mordern Email threats by using the power of AI security.</p>
                            </div>
                        </div>



                    </div>
                    <div className='w-full flex '>
                        <div className='project-row-wrapper overflow-hidden flex flex-row flex-wrap'>


                            <div className='project' ref={project2Reft}>
                                <div className='image-wrapper p-2.5 bg-[#ffefdb]'>
                                    <img src='/images/portfolio.png' alt='portfolio' />
                                </div>
                                <h2 className=''>Online Portfolio <a href='#hero'><span className='bg-green-500 ml-1.5 mb-2.5 rounded-3xl p-1.5 cursor-pointer hover:bg-green-600 text-sm'>View Project</span></a></h2>
                                <p>Learn more about me on this website</p>

                            </div>
                            <div className='project' ref={project2Reft}>
                                <div className='image-wrapper p-2.5 bg-[#ffefdb]'>
                                    <img src='/images/luckydate.png' alt='lycky date' />
                                </div>
                                <h2 className=''>Luck Date <a href='https://lucky-date-mate-kysv.vercel.app/'><span className='bg-green-500 ml-1.5 mb-2.5 rounded-3xl p-1.5 cursor-pointer hover:bg-green-600 text-sm'>View Project</span></a></h2>
                                <p>Roulette Style Speed dating site.</p>

                            </div>



                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShowcaseSection