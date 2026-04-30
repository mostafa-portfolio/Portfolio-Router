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
    const portfolioCards = portfolioData.filter(card=>{
        if(typeFilter==="dynamics"){
            return card.type==="Microsoft Dynamics"
        }
       
        else{
            return card.type==="Web Development"
        }

    }).map(data=>{
                return  <div className='portfolio-card cursor-pointer' key={data.id}>
                            <div>
                                <a href="">
                                    <img src={data.imgUrl} alt="" className='portfolio-img'/>
                                    {/* <p className="white-highlight">TEPCO</p>
                                    <p>{data.type}</p> */}
                                </a>
                            </div>
                            
                        </div>
                })


    /* SearchParams selection */            
    function filter(key,value){
        /* const sp = new URLSearchParams(searchParams) */
        /* if(value===null){
            sp.delete(key,value)
        }sp.delete(key,value) */
        return (`?${key}=${value}`)
    }
     

    

    return(
        <main>
            <Side/>
            <section className='about'>
                <div className='about-intro'>
                    <div className='about-me-head'>
                        <h1>Portfolio</h1>
                        <Header portfolioClass={pathName==="/portfolio"&&"yellow"}/>
                    </div>
                    <hr />

                    {/* Type Filter Links */}
                    <div className="links">

                        <Link to={filter("type","web-development")} 
                            className={`underline portfolio-links ${typeFilter!=="dynamics"&&"yellow"}`}>
                            Web Development 
                        </Link>

                        <Link to={filter("type","dynamics")} 
                            className={`underline portfolio-links ${typeFilter==="dynamics"&&"yellow"}`}>
                            D365
                        </Link>
                    </div>
                    
                    {/* Portfolio Cards */}
                <div className='portfolio-card-container '>
                        {portfolioCards}
                </div>
                </div>

            </section>
        </main>
        
    )
}