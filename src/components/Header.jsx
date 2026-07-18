
import { Link } from "react-router-dom"
export default function Header(props){
    return(
        <header className="header"> 
            <div><Link to='/index.html' className={props.aboutClass}>About</Link></div>
            <div><Link to='/index.html/resume' className={props.resumeClass}>Resume</Link></div>
            {/* <div><Link to='/portfolio' className={props.portfolioClass}>Portfolio</Link></div> */}
            <div><Link to='/index.html/certificates' className={props.certificatesClass}>Certificates</Link></div>
        </header>
    )
}