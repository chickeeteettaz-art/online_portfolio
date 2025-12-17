import React, { useEffect } from 'react'
import { navLinks } from '../constants'

const NavBar = () => {

    const [scrolled,setScrolled] = React.useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10
            setScrolled(true)

        }
        window.addEventListener('scroll',handleScroll)

        return () => {window.removeEventListener('scroll',handleScroll)}
    },[])
  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className='inner'>
            <a className='logo' href='#hero'>Zinhle | Mahlangu</a>
            
            <nav className='desktop'>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.name} className='group'>
                            <a href={link.link}>
                                <span>{link.name}</span>
                                <span className='underline'/>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <a className='contact-btn group' href='#contact'>
                <div className='inner'>
                    <span>Contact Me</span>
                </div>
            </a>
        </div>
    </header>
  )
}

export default NavBar