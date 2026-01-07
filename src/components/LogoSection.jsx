import React from 'react'

// Tech stack icons using Devicon (brand-specific developer icons via CDN)
// See: https://devicon.dev/
const techIcons = [
  { name: 'Java', className: 'java-plain' },
  { name: 'JavaScript', className: 'javascript-plain' },
  { name: 'C#', className: 'csharp-plain' },
  { name: 'SQL Server', className: 'microsoftsqlserver-plain' },
  { name: 'Android Studio', className: 'androidstudio-plain' },
  { name: 'Kotlin', className: 'kotlin-plain' },
  { name: 'React', className: 'react-original' },
  { name: 'Next.js', className: 'nextjs-original' },
  { name: 'Git', className: 'git-plain' },
  { name: 'GitHub', className: 'github-original' },
  { name: 'Azure', className: 'azure-plain' },

]

const LogoIcon = ({ icon }) => {
  return (
    <div className='flex-none flex-center marquee-item'>
      <i
        className={`devicon-${icon.className} text-6xl md:text-5xl text-white/90`}
        aria-label={icon.name}
        title={icon.name}
      />
    </div>
  )
}

const LogoSection = () => {
  return (

    <div className='md:my-10 my-10'>
        <div className='gradient-edge'/>
        <div className='gradient-edge'/>

        <div className='marquee h-52'>
            <div className='marquee-box md:gap-12 gap-5'>
                {techIcons.map((icon) =>(
                    <LogoIcon key={`a-${icon.name}`} icon={icon}/>
                ))}
                {techIcons.map((icon) =>(
                    <LogoIcon key={`b-${icon.name}`} icon={icon}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default LogoSection