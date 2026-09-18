
import { Link } from "react-router-dom"
export default function Header(props){
    return(
        <header className="header"> 
            <div><Link to='/' className={props.aboutClass}>About</Link></div>
            <div><Link to='/resume' className={props.resumeClass}>Resume</Link></div>
            <div><Link to='/portfolio' className={props.portfolioClass}>Projects</Link></div>
            <div><Link to='/certificates' className={props.certificatesClass}>Certificates</Link></div>
        </header>
    )
}