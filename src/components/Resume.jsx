import Header from './Header'
import Side from './Side'
import Experience from './Experience' 
import Internships from './Internships'
import Education from './Education'
import SkillsSection from './SkillsSection'
import { Link } from "react-router-dom"
export default function Resume(){


    /* pathname to highligh title */
    let pathName= window.location.pathname


    return(
        <main>
            <Side/>
            <section className='about'>
            <div className='about-intro'>
                <div className='about-me-head'>
                    <h1>Resume</h1>
                    <Header resumeClass={pathName==="/resume"&&"yellow"}/>
                </div>
                <hr />
            </div>
            <div className='resume'>
                <Experience/>
                <Internships/>
                <Education/>
                <SkillsSection/>
            </div>
            
        </section>
        </main>
        
    )
}