import React from 'react'

const ShowcaseSection = () => {
  return (
    <>
        <div id='work' className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>
                    <div className='first-project-wrapper'>
                        <div className='image-wrapper'>
                            <img src='/images/project1.png' alt='Ryde'/>
                        </div>
                        <div className='text-content'>
                            <h2>On Demand Rides made simple with a powerful, user friendly app called Ryde</h2>
                            <p className='text-white-50 md:text-xl'>A ride sharing app that connects riders with drivers seamlessly.</p>
                        </div>
                    </div>

                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project'>
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src='/images/project3.png' alt='Foodie'/>
                            </div>
                            <h2 className=''>YC Directory</h2>
                        </div>

                        <div className='project'>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src='/images/project2.png' alt='Foodie'/>
                            </div>
                            <h2 className=''>Library Management</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ShowcaseSection