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

    const techStack = ["NEXT.JS","TypeScript","Puter",'Git']



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
                <TitleHeader
                    title="Latest Projects"
                    sub="📋 Projects and Contributions"
                    />
                <div className='showcaselayout'>
                    <div className='first-project-wrapper' ref={project1Reft}>
                        <div className='image-wrapper'>

                            <a href='https://puter.com/app/jsm-ai-resume-analyser-8'>
                                  <img src='/images/resumind.png' alt='Ryde'/>  
                            </a>
                            
                        </div>
                        <div className='text-content'>
                            <h2>Get useful AI generated tips to improve your CV to help you ace your interview and land your dream job. <a href='https://puter.com/app/jsm-ai-resume-analyser-8'><span className='bg-green-500 ml-1.5 mb-2.5 rounded-3xl p-1.5 cursor-pointer hover:bg-green-600 text-sm'>View Project</span></a></h2>
                            <p className='text-white-50 md:text-xl'>AI Powered Platform for improving your CV</p>
                        </div>
                    </div>

                    <div className='project-list-wrapper overflow-hidden'>
                        

                        <div className='project' ref={project2Reft}>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                
                                <img src='/images/movie.png' alt='Foodie'/>
                            </div>
                            <h2 className=''> Movie Dox <a href='https://movieapp-be124.firebaseapp.com/'><span className='bg-green-500 ml-1.5 mb-2.5 rounded-3xl p-1.5 cursor-pointer hover:bg-green-600 text-sm'>View Project</span></a></h2>
                            <p>Get all the latest moview with Movie Dox</p>
                            
                            
                        </div>

                        <div className='project' ref={project3Reft}>
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src='/images/converso.png' alt='Foodie'/>
                            </div>
                            <h2 className=''>Converso AI Tutor<a href='https://saas-app-xmxq-c6o698x5l-zinhle-mahlangus-projects.vercel.app/'> <span className='bg-green-500 ml-1.5 mb-2.5 rounded-3xl p-1.5 cursor-pointer hover:bg-green-600 text-sm'>View Project</span></a></h2>
                            <p>Dive deep into topics with your own AI tutor.</p>
                        </div>
                    </div>


                    
                </div>
                <div className='w-full flex '>
                    <div className='project-row-wrapper overflow-hidden flex flex-row flex-wrap'>
                        

                        <div className='project' ref={project2Reft}>
                            <div className='image-wrapper p-2.5 bg-[#ffefdb]'>
                                
                                <img src='/images/portfolio.png' alt='Foodie'/>
                            </div>
                            <h2 className=''>Online Portfolio <a href='#hero'><span className='bg-green-500 ml-1.5 mb-2.5 rounded-3xl p-1.5 cursor-pointer hover:bg-green-600 text-sm'>View Project</span></a></h2>
                            <p>Learn more about me on this website</p>
                            
                            
                        </div>
                        <div className='project' ref={project2Reft}>
                            <div className='image-wrapper p-2.5 bg-[#ffefdb]'>
                                
                                <img src='/images/interview.png' alt='Foodie'/>
                            </div>
                            <h2 className=''>AI Interview Preper <a href='https://github.com/chickeeteettaz-art/mock_interview_platform'><span className='bg-green-500 ml-1.5 mb-2.5 rounded-3xl p-1.5 cursor-pointer hover:bg-green-600 text-sm'>View Project</span></a></h2>
                            <p>Get live mock interviews with AI Interview agents.</p>
                            
                            
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ShowcaseSection