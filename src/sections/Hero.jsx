import React from 'react'
import { words } from '../constants'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import AnimateCounter from '../components/AnimateCounter'

const Hero = () => {

    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
            y:50,
            opacity:0
            },
            {
                y:0,
                opacity:1,
                stagger:0.2,
                duration:5,
                ease:'power2.inOut',
            },
        )
        /*w-full flex items-center justify-center mt-8*/
    })
  return (
    <section id='hero' className='relative overflow-hidden'>
        <div className='absolute top-0 left-0 z-10'>
            <img src='/images/bg.png' alt='background'/>
        </div>
        <div className='hero-layout'>
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                <div className='flex flex-col gap-7'>
                    <div className='hero-text'>
                        <h1>Shaping 
                            <span className='slide'>
                                <span className='wrapper'>
                                    {words.map((word, index) => (
                                        <span key={index} className='flex items-center md:gap-3 gap-1 pb-2'>
                                            <img src={word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white'/>
                                            <span>{word.text}</span>
                                            
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h1>into Real Projects</h1>
                        <h1>that Deliver Results</h1>
                        
                    </div>
                    <p className='text-white-50 md:text-xl relative z-10'>Hi I am Zinhle Mahlangu.<br/> A dedicated Software Developer keen to build, create and innovate.</p>

                    {/* Social media icons row */}
                    <div className='social-icons relative z-10'>
                        <a className='social-icon' href='https://www.linkedin.com/in/chickeeteetta-mahlangu-4037111b6/' target='_blank' rel='noreferrer noopener' aria-label='LinkedIn'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='24' height='24'>
                                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.025-3.059-1.865-3.059-1.867 0-2.153 1.459-2.153 2.968v5.695h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.561 2.841-1.561 3.039 0 3.6 2.002 3.6 4.604v5.59z'/>
                            </svg>
                        </a>
                        <a className='social-icon' href='https://github.com/chickeeteettaz-art' target='_blank' rel='noreferrer noopener' aria-label='GitHub'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='24' height='24'>
                                <path d='M12 .5C5.648.5.5 5.648.5 12c0 5.089 3.292 9.397 7.865 10.917.575.106.785-.25.785-.556 0-.274-.01-1-.016-1.963-3.199.696-3.874-1.543-3.874-1.543-.523-1.33-1.277-1.684-1.277-1.684-1.044-.714.08-.699.08-.699 1.154.081 1.761 1.186 1.761 1.186 1.027 1.761 2.695 1.252 3.351.957.104-.744.402-1.252.731-1.54-2.555-.291-5.242-1.277-5.242-5.683 0-1.256.449-2.282 1.186-3.087-.119-.29-.514-1.461.112-3.045 0 0 .967-.31 3.17 1.178a10.98 10.98 0 0 1 2.886-.388c.98.005 1.968.132 2.893.388 2.202-1.488 3.167-1.178 3.167-1.178.628 1.584.233 2.755.114 3.045.739.805 1.184 1.831 1.184 3.087 0 4.418-2.692 5.389-5.256 5.675.414.357.788 1.071.788 2.16 0 1.561-.015 2.817-.015 3.201 0 .309.206.669.791.555C20.214 21.394 23.5 17.086 23.5 12 23.5 5.648 18.352.5 12 .5z'/>
                            </svg>
                        </a>
                        <a className='social-icon' href='https://web.facebook.com/chickitteetta.zinhle.9' target='_blank' rel='noreferrer noopener' aria-label='Facebook'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='24' height='24'>
                                <path d='M22.675 0h-21.35C.595 0 0 .593 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.59l-.467 3.622h-3.123V24h6.127C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0z'/>
                            </svg>
                        </a>
                        <a className='social-icon' href='https://wa.me/' target='_blank' rel='noreferrer noopener' aria-label='WhatsApp'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='24' height='24'>
                                <path d='M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.939 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.009-.372-.011-.571-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.519-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.877 9.884M20.52 3.48A11.815 11.815 0 0 0 12.045.003C5.495 0 .056 5.438.053 12.084c0 2.138.558 4.233 1.619 6.067L0 24l6.043-1.583a11.94 11.94 0 0 0 6 1.62h.005c6.645 0 12.08-5.438 12.083-12.084a11.9 11.9 0 0 0-3.61-8.473'/>
                            </svg>
                        </a>
                    </div>
                    <a href='' className='md:w-80 md:h-16 w-60 h-12'><Button 
                        className='md:w-80 md:h-16 w-60 h-12'
                        id='work'
                        text='See my Work'
                        /></a>
                </div>
            </header>
                                    
            
        </div>

        <div className='hero-profile'>
            <img
                src='/images/ProfileImage.png'
                alt='Profile profile photograph'
                className='hero-profile-img rounded-2xl w-56 md:w-80 xl:w-[28rem] h-auto object-cover'
            />
        </div>
        <AnimateCounter/>
    </section>
  )
}

export default Hero