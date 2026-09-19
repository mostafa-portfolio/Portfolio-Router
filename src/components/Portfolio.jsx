import Header from './Header'
import Side from './Side'
import { useSearchParams,Link } from 'react-router-dom'
import portfolioData from '../portfolioData'

export default function Portfolio(){
    const [searchParams,setSearchParams]=useSearchParams()
    const typeFilter = searchParams.get("type")

    /* pathname to highligh title */
    let pathName= window.location.pathname

    /* Portfolio Cards */
   const portfolioCards= portfolioData.map(data=>{
                return  <div className='portfolio-card-container cursor-pointer' key={data.id}>
                            <h3>{data.title}</h3>
                            <p className='portfolio-scope'><b>Scope & Role:</b> {data.scope}</p>
                            <p className='portfolio-contribution'><b>Key contributions:</b></p>
                            <p className='portfolio-cont1'>{data.contribution1}</p>
                            <p>{data.contribution2}</p>
                        </div>
                })




    return(
        <main>
            <Side/>
            <section className='about'>
                <div className='about-intro'>
                    <div className='about-me-head'>
                        <h1>Projects</h1>
                        <Header portfolioClass={Boolean(pathName)===true&&"yellow"}/>
                    </div>
                    <hr />
                    
                    {/* Portfolio Cards */}
                    
                        {portfolioCards}
                
                </div>

            </section>
        </main>
        
    )
}