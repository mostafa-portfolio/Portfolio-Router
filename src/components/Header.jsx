
import { Link } from "react-router-dom"
export default function Header(props){
    return(
        <header className="header"> 
            <div><Link to='/' className={`yellow-highlight ${props.aboutClass}`}><span className="lower-header">About</span></Link></div>
            <div><Link to='/resume' className={`yellow-highlight ${props.resumeClass}`}><span className="lower-header">Resume</span></Link></div>
            <div><Link to='/portfolio' className={`yellow-highlight ${props.portfolioClass}`}><span className="lower-header">Projects</span></Link></div>
            <div><Link to='/certificates' className={`yellow-highlight ${props.certificatesClass}`}><span className="lower-header">Certificates</span></Link></div>
        </header>
    )
}