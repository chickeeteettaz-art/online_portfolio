import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {

    const sectionRef = useRef(null);
    const project1Reft = useRef(null);
    const project2Reft = useRef(null);
    const project3Reft = useRef(null);

    



    useGSAP(() => {
        const projects = [project1Reft.current, project2Reft.current, project3Reft.current];
        
        projects.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
                y:50,
                 opacity:0
            },

            {
                y:0, opacity:1,
                duration:1,
                delay: 0.3 * (index + 1),
                ScrollTrigger:{
                trigger: card,
                start: 'top bottom-=100'
            }
        }
        )
    }) 


        gsap.fromTo(project1Reft.current,
            {opacity:0},{opacity:1},{duration:1.5});
    },[])

  return (
    <>
        <section ref={sectionRef} id='work' className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>
                    <div className='first-project-wrapper' ref={project1Reft}>
                        <div className='image-wrapper'>
                            <img src='/images/project1.png' alt='Ryde'/>
                        </div>
                        <div className='text-content'>
                            <h2>On Demand Rides made simple with a powerful, user friendly app called Ryde</h2>
                            <p className='text-white-50 md:text-xl'>A ride sharing app that connects riders with drivers seamlessly.</p>
                        </div>
                    </div>

                    <div className='project-list-wrapper overflow-hidden'>
                        

                        <div className='project' ref={project2Reft}>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src='/images/project2.png' alt='Foodie'/>
                            </div>
                            <h2 className=''>Library Management</h2>
                        </div>

                        <div className='project' ref={project3Reft}>
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src='/images/project3.png' alt='Foodie'/>
                            </div>
                            <h2 className=''>YC Directory</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ShowcaseSection