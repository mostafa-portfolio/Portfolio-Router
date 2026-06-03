
import {Link} from 'react-router-dom'
import ServiceCard from './ServiceCard'
import Header from './Header'
import iconDev from '/src/assets/icon-dev.svg'
import iconDesign from '/src/assets/icon-design.svg'

export default function About(){


    /* pathname to highligh title */
    let pathName= window.location.pathname


    return(
        
        <section className='about'>
            <div className='about-intro'>
                <div className='about-me-head'>
                    <h1>About Me</h1>
                    <Header aboutClass={pathName==="/"&&"yellow"}/>
                </div>
                <hr />
               <div className='about-me-desc '> 
                 <p>Detail-oriented Engineer with a Master’s-level focus on mechatronics, automation, and advanced manufacturing.
                    Proficient in CAD/CAM (CATIA, SolidWorks), simulation, and optimization of mechanical and electro-hydraulic
                    systems. Proven ability to integrate multidisciplinary knowledge for system design and process improvement. 
                </p>
               </div>
            </div>
            <h2>What I'm Doing</h2>
            <div className='service-box'>
               
                <ServiceCard 
                    icon={iconDesign}
                    title="Industrial Engineer" 
                    description="Nile University Alumni with experience in Electrical Appliances , Transformers and Elevators industry."
                />
                <ServiceCard 
                    icon={iconDesign}
                    title="Microsoft Dynamics ERP Consultant" 
                    description="Works with Dynamics 365 , AX 2012 , Business Central and Field Service."
                />
                {/* <ServiceCard
                    icon={iconDev}
                    title="Frontend Web Development" 
                    description="High-quality development of sites at the professional level."
                /> */}
            </div>
        </section>
    )
}