

export default function ServiceCard(props){
    
    return (
        <>
            <div className="service-card">
                <div className="service-icon">
                    <img src={props.icon} alt="design icon" width="40"></img>
                </div>
                <div className="service-body">
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    )

}