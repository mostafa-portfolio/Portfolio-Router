
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
                 <p>Industrial Engineer with a solid foundation in mechanical product design and process engineering. Earned recognition for academic excellence,
                     including first-place honors in operations and production management at the 9th NU Research Forum.</p>
                 <p>Currently contributing as a Dynamics 365 Finance and Operations Functional Consultant at Mindzer Systems.
                     Specializing in Advanced Warehouse Management, supply chain processes, and user training, with a focus on 
                     delivering smooth implementations and successful go-live outcomes. Passionate about driving efficiency and 
                     innovation through tailored solutions.

                </p>
               </div>
            </div>
            <h2>What I'm Doing</h2>
            <div className='service-box'>
                <ServiceCard
                    icon={iconDev}
                    title="Frontend Web Development" 
                    description="High-quality development of sites at the professional level."
                />
                <ServiceCard 
                    icon={iconDesign}
                    title="Microsoft Dynamics ERP Consultant" 
                    description="Works with Dynamics 365 , AX 2012 , Business Central and Field Service."
                />
                <ServiceCard 
                    icon={iconDesign}
                    title="Industrial Engineer" 
                    description="Nile University Alumni with experience in Electrical Appliances , Transformers and Elevators industries."
                />
            </div>
        </section>
    )
}