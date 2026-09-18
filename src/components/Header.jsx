
import { Link } from "react-router-dom"
export default function Header(props){
    return(
        <header className="header"> 
            <div><Link to='/' className={`yellow-highlight ${props.aboutClass}`}>About</Link></div>
            <div><Link to='/resume' className={`yellow-highlight ${props.resumeClass}`}>Resume</Link></div>
            <div><Link to='/portfolio' className={`yellow-highlight ${props.portfolioClass}`}>Projects</Link></div>
            <div><Link to='/certificates' className={`yellow-highlight ${props.certificatesClass}`}>Certificates</Link></div>
        </header>
    )
}