import Header from './Header'
import certificatesData from '../certificatesData'
import Side from './Side'
export default function Certificates(){

    /* pathname to highligh title */
    let pathName= window.location.pathname


    const certificatesHtml=certificatesData.map(certificate=>{
                        return  <div className='certificate-card ' key={certificate.id}>
                                    <img src={certificate.imgUrl} alt="" className='certificate-img cursor-pointer'/>
                                    <date>{certificate.date}</date>
                                    <p className='white-highlight'>{certificate.title}</p>
                                    <p>{certificate.organization}</p>
                                </div>
                    })
    return(
        
        <main>
            <Side/>
            <section className='about'>
                <div className='certificates-intro'>
                    <div className='about-me-head'>
                        <h1>Certificates</h1>
                        <Header certificatesClass={pathName==="/certificates"&&"yellow"}/>
                    </div>
                    <hr />
                    <p className='yellow '>All</p>
                </div>

                <div className='certificates-card-container'>
                        {certificatesHtml}
                </div>
         
            </section>
        </main>
        
    )
}